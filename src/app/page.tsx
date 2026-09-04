"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Gauge, ListChecks, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { CareerSwatch } from "@/components/CareerIcon";
import { useLocale } from "@/components/LocaleProvider";
import { ProfileInstrument } from "@/components/ProfileInstrument";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Panel, SheetLabel } from "@/components/ui/Card";
import { CAREERS } from "@/lib/careers";
import { cn } from "@/lib/cn";
import { ui } from "@/lib/i18n";
import { estimatedMinutes, questionCount, type TestMode } from "@/lib/questions";
import { progressKey, readHistory, removeFromHistory, type HistoryEntry } from "@/lib/storageKeys";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const { tr } = useLocale();
  const [progress, setProgress] = useState<Record<TestMode, boolean>>({ short: false, full: false });
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const careersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProgress({
      short: Boolean(window.localStorage.getItem(progressKey("short"))),
      full: Boolean(window.localStorage.getItem(progressKey("full"))),
    });
    setHistory(readHistory());
  }, []);

  const clear = (mode: TestMode) => {
    window.localStorage.removeItem(progressKey(mode));
    setProgress((current) => ({ ...current, [mode]: false }));
  };

  const scrollToCareers = () => {
    careersRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const anyProgress = progress.short || progress.full;

  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        {/*
         * Όλα όσα χρειάζεται κάποιος για να ξεκινήσει χωρούν σε μία οθόνη: τι
         * είναι, πόσο κρατάει, και τα δύο κουμπιά εκκίνησης.
         */}
        <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              {/* Διακριτική ένδειξη: μια κουκκίδα αντί για γεμάτο κύκλο με τσεκ,
                  που έπιανε όλο το ύψος του πλαισίου και βάραινε τη γωνία. */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 text-[13px] text-[var(--ink-3)]"
              >
                <span aria-hidden className="size-1.5 rounded-full bg-[var(--accent)]" />
                {tr(ui.noSignup)}
                <span aria-hidden className="text-[var(--rule-strong)]">·</span>
                {tr(ui.anonymous)}
              </motion.p>

              {/* Δύο ελεγχόμενες γραμμές αντί για τρεις που τυλίγονταν μόνες τους. */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
                className="display mt-4 text-[34px] font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]"
              >
                <span className="block">{tr(ui.taglineLead)}</span>
                <span className="block text-[var(--accent)]">{tr(ui.taglineTail)}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                className="mt-4 max-w-[48ch] text-[15px] leading-[1.6] text-[var(--ink-2)] sm:text-[16px]"
              >
                {tr(ui.heroJob)}
              </motion.p>

              {/* Τα δύο κουμπιά εκκίνησης, ορατά αμέσως */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.16 }}
                className="mt-6 flex max-w-[460px] flex-col gap-2.5"
              >
                <StartButton mode="full" hasProgress={progress.full} primary />
                <StartButton mode="short" hasProgress={progress.short} />
              </motion.div>

              {anyProgress && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["full", "short"] as const)
                    .filter((mode) => progress[mode])
                    .map((mode) => (
                      <Button key={mode} variant="quiet" size="sm" onClick={() => clear(mode)}>
                        <RotateCcw aria-hidden strokeWidth={1.75} className="size-3.5" />
                        {tr(ui.startOver)} · {tr(mode === "short" ? ui.shortTest : ui.fullTest)}
                      </Button>
                    ))}
                </div>
              )}

              {/* Τρία βήματα σε μία γραμμή: τι θα συμβεί μόλις πατήσεις */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-col gap-3 border-t border-[var(--rule)] pt-5 text-[12.5px] text-[var(--ink-3)] sm:flex-row sm:items-center sm:gap-x-5"
              >
                <ol className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {[tr(ui.stepAnswer), tr(ui.stepSee), tr(ui.stepPlan)].map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="mono grid size-5 shrink-0 place-items-center rounded-full border border-[var(--rule-strong)] text-[10px] text-[var(--ink-4)]">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <button
                  type="button"
                  onClick={scrollToCareers}
                  className="flex items-center gap-1.5 self-start rounded-full px-2 py-1 transition-colors duration-200 ease-out hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] sm:ml-auto"
                  aria-label={tr(ui.seeDirections)}
                >
                  <span className="text-[12.5px] font-medium">{tr(ui.seeDirections)}</span>
                  <ArrowDown aria-hidden strokeWidth={2} className="size-4" />
                </button>
              </motion.div>
            </div>

            {/* Το όργανο: κυκλικό, με απαλή λάμψη αντί για πλαίσιο */}
            <div className="relative hidden justify-center lg:flex">
              <div aria-hidden className="halo absolute inset-0 scale-110" />
              <ProfileInstrument className="relative h-auto w-full max-w-[470px]" />
            </div>
          </div>
        </section>

        {history.length > 0 && (
          <SavedResults
            entries={history}
            onRemove={(id) => setHistory(removeFromHistory(id))}
          />
        )}

        <section ref={careersRef} className="scroll-mt-16 border-t border-[var(--rule)] py-16">
          <SheetLabel>{tr({ el: "Οι 13 κατευθύνσεις", en: "The 13 directions" })}</SheetLabel>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {CAREERS.map((career, index) => (
              <motion.li
                key={career.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.2), ease: EASE }}
              >
                <Panel
                  className="group/card flex h-full items-center gap-4 p-4 pr-5 hover:border-[var(--rule-strong)]"
                  style={{ ["--card-color" as string]: career.color }}
                >
                  <CareerSwatch
                    id={career.id}
                    color={career.color}
                    className="transition-transform duration-200 ease-out group-hover/card:scale-110"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold tracking-tight transition-colors duration-200 ease-out group-hover/card:text-[var(--card-color)]">
                      {tr(career.name)}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-[var(--ink-3)]">
                      {tr(career.tagline)}
                    </p>
                  </div>
                </Panel>
              </motion.li>
            ))}
          </ul>
        </section>

        <p className="max-w-[70ch] py-8 text-[13px] leading-relaxed text-[var(--ink-3)]">
          {tr(ui.disclaimer)}
        </p>
      </main>
    </>
  );
}

/**
 * Το κουμπί εκκίνησης είναι το βαρύτερο στοιχείο της σελίδας: μεγάλο ύψος, δύο
 * σειρές (τι είναι + πόσο κρατάει) και βέλος σε δικό του κύκλο, ώστε να διαβάζεται
 * αμέσως ως «εδώ πατάς».
 */
function StartButton({
  mode,
  hasProgress,
  primary = false,
}: {
  mode: TestMode;
  hasProgress: boolean;
  primary?: boolean;
}) {
  const { tr } = useLocale();
  const reduced = useReducedMotion();

  return (
    <span className="relative inline-flex w-full">
      {/* Απαλός παλμός μόνο πίσω από την κύρια ενέργεια. */}
      {primary && !reduced && (
        <motion.span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]"
          initial={{ opacity: 0.18, scale: 1 }}
          animate={{ opacity: [0.18, 0.05, 0.18], scale: [1, 1.06, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <ButtonLink
        href={`/test?mode=${mode}`}
        variant={primary ? "primary" : "outline"}
        size="xl"
        className={cn(
          "group/cta w-full justify-start gap-3.5 py-3 pl-4 pr-3.5",
          primary ? "h-auto min-h-[80px]" : "h-auto min-h-[72px]",
        )}
      >
        {/* Εικονίδιο που ξεχωρίζει τα δύο τεστ πριν καν διαβάσεις τίτλο */}
        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full",
            primary
              ? "bg-white/18 text-white dark:bg-black/25 dark:text-[var(--ink-invert)]"
              : "bg-[var(--accent-soft)] text-[var(--accent)]",
          )}
        >
          {primary ? (
            <ListChecks aria-hidden strokeWidth={1.75} className="size-5" />
          ) : (
            <Gauge aria-hidden strokeWidth={1.75} className="size-5" />
          )}
        </span>

        <span className="flex min-w-0 flex-1 flex-col items-start gap-1 text-left">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="display text-[17px] font-bold tracking-[-0.02em]">
              {tr(mode === "short" ? ui.shortTest : ui.fullTest)}
            </span>
            {primary && (
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold text-white dark:bg-black/25 dark:text-[var(--ink-invert)]">
                {tr({ el: "Συνιστάται", en: "Recommended" })}
              </span>
            )}
          </span>

          <span
            className={cn(
              "text-[13px] font-normal leading-snug",
              primary ? "text-white/90 dark:text-[var(--ink-invert)]/85" : "text-[var(--ink-3)]",
            )}
          >
            <span className="mono">{questionCount(mode)}</span> {tr(ui.questions)}
            {" · "}
            <span className="mono">{estimatedMinutes(mode)}</span> {tr(ui.minutes)}
            {" · "}
            {tr(mode === "short" ? ui.shortTestSpec : ui.fullTestSpec)}
          </span>

          {hasProgress && (
            <span
              className={cn(
                "text-[12px] font-medium",
                primary ? "text-white dark:text-[var(--ink-invert)]" : "text-[var(--accent)]",
              )}
            >
              {tr(ui.resumeTest)}
            </span>
          )}
        </span>

        <span
          className={cn(
            "grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-200 ease-out",
            "group-hover/cta:translate-x-0.5",
            primary
              ? "bg-white/18 text-white dark:bg-black/25 dark:text-[var(--ink-invert)]"
              : "bg-[var(--panel-2)] text-[var(--ink-2)]",
          )}
        >
          <ArrowRight aria-hidden strokeWidth={2} className="size-5" />
        </span>
      </ButtonLink>
    </span>
  );
}

/**
 * Τα αποτελέσματα που έχει ανοίξει αυτή η συσκευή. Το ίδιο το αποτέλεσμα ζει
 * στη βάση· εδώ κρατάμε μόνο τον δρόμο προς αυτό.
 */
function SavedResults({
  entries,
  onRemove,
}: {
  entries: HistoryEntry[];
  onRemove: (id: string) => void;
}) {
  const { tr, locale } = useLocale();

  return (
    <div className="max-w-xl border-t border-[var(--rule)] py-10">
      <SheetLabel>{tr(ui.savedResults)}</SheetLabel>

      <ul className="mt-7 space-y-1.5">
        {entries.map((entry) => {
          const career = CAREERS.find((c) => c.id === entry.careerId);
          return (
            <li key={entry.id} className="group/saved flex items-center gap-2.5">
              <Link
                href={`/results/${entry.id}`}
                className={cn(
                  "flex min-w-0 flex-1 items-center gap-3 rounded-full px-3 py-2",
                  "border border-[var(--rule)] bg-[var(--panel)]",
                  "transition-colors duration-200 ease-out hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                )}
              >
                {career && <CareerSwatch id={career.id} color={career.color} size="sm" />}
                <span className="min-w-0 flex-1 truncate text-[13.5px] font-medium">
                  {career ? tr(career.name) : entry.careerId}
                </span>
                <span className="mono shrink-0 text-[12px] text-[var(--ink-3)]">
                  {entry.match}%
                </span>
                <span className="hidden shrink-0 text-[11.5px] text-[var(--ink-4)] sm:inline">
                  {new Date(entry.createdAt).toLocaleDateString(
                    locale === "el" ? "el-GR" : "en-GB",
                    { day: "numeric", month: "short" },
                  )}
                </span>
              </Link>

              <button
                type="button"
                onClick={() => onRemove(entry.id)}
                aria-label={tr(ui.removeResult)}
                title={tr(ui.removeResult)}
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-full text-[var(--ink-4)]",
                  "transition-colors duration-200 ease-out hover:bg-[var(--panel-2)] hover:text-[var(--ink)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                )}
              >
                <X aria-hidden strokeWidth={2} className="size-4" />
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-3 max-w-[52ch] text-[11.5px] leading-relaxed text-[var(--ink-4)]">
        {tr(ui.savedResultsLead)}
      </p>
    </div>
  );
}
