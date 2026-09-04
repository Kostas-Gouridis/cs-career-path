import fs from "node:fs";
import path from "node:path";
import fontkit from "@pdf-lib/fontkit";
import { PDFDocument, rgb, type PDFFont, type PDFPage, type RGB } from "pdf-lib";
import { CAREER_BY_ID } from "./careers";
import type { Locale } from "./i18n";
import type { StoredSubmission } from "./db";
import { TRAITS } from "./traits";

/**
 * Παράγει το PDF του αποτελέσματος. Δεν είναι εκτύπωση της σελίδας: είναι δικό
 * του έγγραφο, σχεδιασμένο για χαρτί — γι' αυτό και η διάταξη ορίζεται εδώ σε
 * συντεταγμένες αντί να προκύπτει από CSS.
 */

const A4 = { width: 595.28, height: 841.89 };
const MARGIN = 48;
const CONTENT_WIDTH = A4.width - MARGIN * 2;

const INK = rgb(0.08, 0.13, 0.2);
const INK_SOFT = rgb(0.42, 0.48, 0.56);
const RULE = rgb(0.85, 0.88, 0.92);
const ACCENT = rgb(0.29, 0.45, 0.72);

type Fonts = { regular: PDFFont; bold: PDFFont };

/** Μεταφράσεις μόνο για το έγγραφο — δεν αξίζει να μπουν στο i18n του UI. */
const T = {
  title: { el: "Το αποτέλεσμά σου", en: "Your result" },
  topMatch: { el: "Καλύτερο ταίριασμα", en: "Best match" },
  ranking: { el: "Κατάταξη και στις 13 καριέρες", en: "All 13 careers ranked" },
  profile: { el: "Το προφίλ σου σε 8 διαστάσεις", en: "Your profile across 8 dimensions" },
  roadmap: { el: "Πρώτα βήματα", en: "First steps" },
  tech: { el: "Τεχνολογίες", en: "Technologies" },
  projects: { el: "Projects για χαρτοφυλάκιο", en: "Portfolio projects" },
  basedOnShort: { el: "Σύντομο τεστ · 20 ερωτήσεις", en: "Quick test · 20 questions" },
  basedOnFull: { el: "Πλήρες τεστ · 60 ερωτήσεις", en: "Full test · 60 questions" },
  disclaimer: {
    el: "Υπάρχουν και άλλες καριέρες στην πληροφορική — αυτές είναι οι πιο συχνές. Το τεστ δείχνει κατεύθυνση, δεν αποφασίζει για σένα.",
    en: "There are other careers in tech — these are the most common ones. This test points a direction; it does not decide for you.",
  },
  permalink: { el: "Μόνιμο link", en: "Permanent link" },
} as const;

let cachedFonts: { regular: Buffer; bold: Buffer } | null = null;

function loadFontBytes(): { regular: Buffer; bold: Buffer } {
  if (cachedFonts) return cachedFonts;
  const dir = path.join(process.cwd(), "src", "assets", "fonts");
  cachedFonts = {
    regular: fs.readFileSync(path.join(dir, "NotoSans-Regular.ttf")),
    bold: fs.readFileSync(path.join(dir, "NotoSans-Bold.ttf")),
  };
  return cachedFonts;
}

/** "#e0568a" -> RGB του pdf-lib. */
function hexToRgb(hex: string): RGB {
  const clean = hex.replace("#", "");
  const n = parseInt(clean, 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

/** Κόβει το κείμενο στο πλάτος που του δίνεται, σπάζοντας σε λέξεις. */
function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Μια λωρίδα προόδου — το ίδιο σχήμα με τις μπάρες της σελίδας. */
function bar(page: PDFPage, x: number, y: number, width: number, pct: number, color: RGB): void {
  const height = 5;
  page.drawRectangle({ x, y, width, height, color: RULE });
  const filled = Math.max(1, (Math.max(0, Math.min(100, pct)) / 100) * width);
  page.drawRectangle({ x, y, width: filled, height, color });
}

export async function buildResultPdf(
  submission: StoredSubmission,
  locale: Locale,
  permalink: string,
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);

  const bytes = loadFontBytes();
  const fonts: Fonts = {
    regular: await doc.embedFont(bytes.regular, { subset: true }),
    bold: await doc.embedFont(bytes.bold, { subset: true }),
  };

  const tr = (v: { el: string; en: string }) => (locale === "en" ? v.en : v.el);

  let page = doc.addPage([A4.width, A4.height]);
  let y = A4.height - MARGIN;

  /** Ανοίγει νέα σελίδα μόλις το περιεχόμενο πλησιάσει το κάτω περιθώριο. */
  const ensure = (needed: number) => {
    if (y - needed >= MARGIN + 28) return;
    page = doc.addPage([A4.width, A4.height]);
    y = A4.height - MARGIN;
  };

  const heading = (text: string) => {
    ensure(34);
    y -= 20;
    page.drawText(text, { x: MARGIN, y, size: 12, font: fonts.bold, color: INK });
    y -= 8;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: MARGIN + CONTENT_WIDTH, y },
      thickness: 0.75,
      color: RULE,
    });
    y -= 14;
  };

  // ── Κεφαλίδα ────────────────────────────────────────────────────────────
  page.drawText("CS Career Path", { x: MARGIN, y, size: 9, font: fonts.bold, color: ACCENT });
  y -= 26;

  page.drawText(tr(T.title), { x: MARGIN, y, size: 21, font: fonts.bold, color: INK });
  y -= 18;

  const meta = `${tr(submission.mode === "short" ? T.basedOnShort : T.basedOnFull)} · ${new Date(
    submission.createdAt,
  ).toLocaleDateString(locale === "en" ? "en-GB" : "el-GR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
  page.drawText(meta, { x: MARGIN, y, size: 9, font: fonts.regular, color: INK_SOFT });
  y -= 26;

  // ── Νικητής ─────────────────────────────────────────────────────────────
  const top = submission.scores[0];
  const winner = CAREER_BY_ID[top.careerId];
  const winnerColor = hexToRgb(winner.color);

  page.drawRectangle({
    x: MARGIN,
    y: y - 52,
    width: CONTENT_WIDTH,
    height: 66,
    color: rgb(0.97, 0.98, 0.99),
    borderColor: RULE,
    borderWidth: 0.75,
  });
  page.drawRectangle({ x: MARGIN, y: y - 52, width: 3.5, height: 66, color: winnerColor });

  page.drawText(tr(T.topMatch), {
    x: MARGIN + 16,
    y: y - 2,
    size: 8,
    font: fonts.regular,
    color: INK_SOFT,
  });
  page.drawText(tr(winner.name), {
    x: MARGIN + 16,
    y: y - 22,
    size: 17,
    font: fonts.bold,
    color: INK,
  });
  const pctText = `${top.match}%`;
  page.drawText(pctText, {
    x: MARGIN + CONTENT_WIDTH - 16 - fonts.bold.widthOfTextAtSize(pctText, 22),
    y: y - 22,
    size: 22,
    font: fonts.bold,
    color: winnerColor,
  });

  for (const [i, line] of wrap(tr(winner.tagline), fonts.regular, 9, CONTENT_WIDTH - 32).entries()) {
    if (i > 1) break;
    page.drawText(line, {
      x: MARGIN + 16,
      y: y - 38 - i * 11,
      size: 9,
      font: fonts.regular,
      color: INK_SOFT,
    });
  }
  y -= 66;

  // ── Κατάταξη ────────────────────────────────────────────────────────────
  heading(tr(T.ranking));

  const labelWidth = 132;
  const pctWidth = 32;
  const barWidth = CONTENT_WIDTH - labelWidth - pctWidth - 16;

  for (const entry of submission.scores) {
    const career = CAREER_BY_ID[entry.careerId];
    ensure(16);
    const isTop3 = submission.scores.indexOf(entry) < 3;

    page.drawText(tr(career.name), {
      x: MARGIN,
      y,
      size: 9,
      font: isTop3 ? fonts.bold : fonts.regular,
      color: isTop3 ? INK : INK_SOFT,
    });
    bar(page, MARGIN + labelWidth, y + 1, barWidth, entry.match, hexToRgb(career.color));
    const p = `${entry.match}%`;
    page.drawText(p, {
      x: MARGIN + CONTENT_WIDTH - fonts.regular.widthOfTextAtSize(p, 9),
      y,
      size: 9,
      font: fonts.regular,
      color: INK_SOFT,
    });
    y -= 15;
  }

  // ── Προφίλ ──────────────────────────────────────────────────────────────
  heading(tr(T.profile));

  const traitsSorted = [...TRAITS].sort(
    (a, b) => (submission.traits[b.id] ?? 0) - (submission.traits[a.id] ?? 0),
  );

  for (const trait of traitsSorted) {
    const value = submission.traits[trait.id] ?? 0;
    ensure(16);
    page.drawText(tr(trait.name), { x: MARGIN, y, size: 9, font: fonts.regular, color: INK });
    bar(page, MARGIN + labelWidth, y + 1, barWidth, value, ACCENT);
    const p = `${value}%`;
    page.drawText(p, {
      x: MARGIN + CONTENT_WIDTH - fonts.regular.widthOfTextAtSize(p, 9),
      y,
      size: 9,
      font: fonts.regular,
      color: INK_SOFT,
    });
    y -= 15;
  }

  // ── Πρώτα βήματα για τον νικητή ─────────────────────────────────────────
  heading(`${tr(T.roadmap)} · ${tr(winner.name)}`);

  ensure(26);
  page.drawText(tr(T.tech), { x: MARGIN, y, size: 8.5, font: fonts.bold, color: INK_SOFT });
  y -= 12;
  for (const line of wrap(winner.tech.join(" · "), fonts.regular, 9, CONTENT_WIDTH)) {
    ensure(13);
    page.drawText(line, { x: MARGIN, y, size: 9, font: fonts.regular, color: INK });
    y -= 12;
  }

  y -= 8;
  ensure(26);
  page.drawText(tr(T.projects), { x: MARGIN, y, size: 8.5, font: fonts.bold, color: INK_SOFT });
  y -= 13;
  for (const project of winner.projects.slice(0, 3)) {
    const lines = wrap(tr(project), fonts.regular, 9, CONTENT_WIDTH - 14);
    ensure(lines.length * 12 + 4);
    page.drawCircle({ x: MARGIN + 3, y: y + 3, size: 1.6, color: ACCENT });
    for (const [i, line] of lines.entries()) {
      page.drawText(line, { x: MARGIN + 14, y, size: 9, font: fonts.regular, color: INK });
      y -= 12;
      if (i === lines.length - 1) y -= 3;
    }
  }

  // ── Υποσέλιδο σε κάθε σελίδα ────────────────────────────────────────────
  const pages = doc.getPages();
  for (const [index, p] of pages.entries()) {
    const footY = MARGIN - 16;
    p.drawLine({
      start: { x: MARGIN, y: footY + 20 },
      end: { x: MARGIN + CONTENT_WIDTH, y: footY + 20 },
      thickness: 0.5,
      color: RULE,
    });

    // Το disclaimer μόνο στην τελευταία, για να μη γεμίζει κάθε σελίδα.
    if (index === pages.length - 1) {
      const lines = wrap(tr(T.disclaimer), fonts.regular, 7, CONTENT_WIDTH);
      lines.forEach((line, i) => {
        p.drawText(line, {
          x: MARGIN,
          y: footY + 10 - i * 8,
          size: 7,
          font: fonts.regular,
          color: INK_SOFT,
        });
      });
    } else {
      p.drawText(permalink, {
        x: MARGIN,
        y: footY + 10,
        size: 7,
        font: fonts.regular,
        color: INK_SOFT,
      });
    }

    const num = `${index + 1} / ${pages.length}`;
    p.drawText(num, {
      x: MARGIN + CONTENT_WIDTH - fonts.regular.widthOfTextAtSize(num, 7),
      y: footY + 10,
      size: 7,
      font: fonts.regular,
      color: INK_SOFT,
    });
  }

  doc.setTitle(`CS Career Path — ${tr(winner.name)}`);
  doc.setCreator("CS Career Path");
  doc.setProducer("CS Career Path");

  return doc.save();
}
