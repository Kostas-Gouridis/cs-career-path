"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLocale } from "./LocaleProvider";
import { CAREERS } from "@/lib/careers";

/**
 * Το θέμα της σελίδας σε ένα σχήμα: το τεστ παράγει ένα διάγραμμα προφίλ, οπότε
 * η αρχική ανοίγει με το ίδιο το όργανο να σχεδιάζεται — μία ακτίνα ανά καριέρα,
 * με το όνομά της στην άκρη, ώστε να φαίνεται τι μπορεί να βγει ως αποτέλεσμα.
 *
 * Στο hover, η ακτίνα ανάβει στο χρώμα της καριέρας, οι υπόλοιπες σβήνουν και στο
 * κέντρο εμφανίζεται το πλήρες όνομα — το διάγραμμα γίνεται υπόμνημα που εξηγείται
 * μόνο του.
 */
const SAMPLE = [0.86, 0.68, 0.62, 0.44, 0.7, 0.52, 0.78, 0.58, 0.4, 0.66, 0.48, 0.74, 0.56];

const WIDTH = 460;
const HEIGHT = 400;
/* Ελαφρά μετατόπιση δεξιά: η αριστερή ετικέτα («Data Science») ακουμπούσε το όριο. */
const CX = WIDTH / 2 + 8;
const CY = HEIGHT / 2;
const RADIUS = 112;

/** Στρογγυλοποίηση: τα Math.cos/sin διαφέρουν στα τελευταία ψηφία ανάμεσα σε
 *  server και browser, που η React το ανέφερε ως hydration mismatch. */
function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

function point(index: number, ratio: number, count: number) {
  const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
  return [
    round(CX + Math.cos(angle) * RADIUS * ratio),
    round(CY + Math.sin(angle) * RADIUS * ratio),
  ] as const;
}

export function ProfileInstrument({ className }: { className?: string }) {
  const { tr } = useLocale();
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const count = CAREERS.length;
  const shape = SAMPLE.map((value, index) => point(index, value, count).join(",")).join(" ");

  const draw = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 0.9, delay, ease: [0.2, 0.9, 0.25, 1] as const },
        };

  /** Ό,τι δεν είναι το στοιχείο κάτω από τον δείκτη, υποχωρεί. */
  const dim = (index: number) => (hovered === null || hovered === index ? 1 : 0.28);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      role="img"
      aria-label={tr({
        el: "Διάγραμμα με τις 13 κατευθύνσεις που μπορεί να βγάλει το τεστ",
        en: "Diagram of the 13 directions the test can produce",
      })}
      onMouseLeave={() => setHovered(null)}
    >
      {[0.25, 0.5, 0.75, 1].map((ring, index) => (
        <motion.circle
          key={ring}
          cx={CX}
          cy={CY}
          r={round(RADIUS * ring)}
          fill="none"
          stroke="var(--rule)"
          strokeWidth={1}
          strokeDasharray={ring === 1 ? undefined : "2 4"}
          {...draw(0.05 * index)}
        />
      ))}

      {/* Το προφίλ. Υποχωρεί όσο εξετάζεις μια συγκεκριμένη κατεύθυνση. */}
      <motion.polygon
        points={shape}
        fill="var(--accent)"
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinejoin="round"
        initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.55 }}
        animate={{
          opacity: hovered === null ? 1 : 0.35,
          scale: 1,
          fillOpacity: hovered === null ? 0.12 : 0.05,
        }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
        transition={{ duration: 0.8, delay: reduced ? 0 : 0.5, ease: [0.2, 0.9, 0.25, 1] }}
      />

      {SAMPLE.map((value, index) => {
        const [px, py] = point(index, value, count);
        return (
          <motion.circle
            key={index}
            cx={px}
            cy={py}
            r={hovered === index ? 5 : 3}
            fill="var(--paper)"
            stroke={hovered === index ? CAREERS[index].color : "var(--accent)"}
            strokeWidth={hovered === index ? 2.5 : 1.5}
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: dim(index) }}
            transition={{ duration: 0.25, delay: reduced ? 0 : 0.85 + index * 0.03 }}
            style={{ transition: "r 200ms ease-out, stroke-width 200ms ease-out" }}
          />
        );
      })}

      <circle cx={CX} cy={CY} r={2.5} fill="var(--accent)" />

      {/* Ακτίνες, υποδιαιρέσεις, ετικέτες — και η αόρατη περιοχή που πιάνει το ποντίκι */}
      {CAREERS.map((career, index) => {
        const [x, y] = point(index, 1, count);
        const [tx, ty] = point(index, hovered === index ? 1.11 : 1.07, count);
        const [lx, ly] = point(index, 1.2, count);
        const [hx, hy] = point(index, 1.24, count);
        const dx = lx - CX;
        const anchor = dx > 6 ? "start" : dx < -6 ? "end" : "middle";
        const offset = anchor === "start" ? 6 : anchor === "end" ? -6 : 0;
        const active = hovered === index;

        return (
          <g
            key={career.id}
            onMouseEnter={() => setHovered(index)}
            style={{ cursor: "pointer" }}
          >
            <motion.line
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke={active ? career.color : "var(--rule)"}
              strokeWidth={active ? 1.5 : 1}
              initial={reduced ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
              animate={{ opacity: dim(index), pathLength: 1 }}
              transition={{
                duration: reduced ? 0 : 0.9,
                delay: reduced ? 0 : 0.2 + index * 0.02,
                ease: [0.2, 0.9, 0.25, 1],
                opacity: { duration: 0.2, delay: 0 },
              }}
            />

            <motion.line
              x1={x}
              y1={y}
              x2={tx}
              y2={ty}
              stroke={career.color}
              strokeWidth={active ? 4 : 2.5}
              strokeLinecap="round"
              initial={reduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: dim(index) }}
              transition={{ duration: 0.3, delay: reduced ? 0 : 0.65 + index * 0.03 }}
              style={{ transition: "stroke-width 200ms ease-out" }}
            />

            <motion.text
              x={round(lx + offset)}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize={12}
              fontWeight={active ? 700 : 600}
              fill={active ? career.color : "var(--ink-3)"}
              initial={reduced ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: dim(index) }}
              transition={{ duration: 0.35, delay: reduced ? 0 : 0.9 + index * 0.04 }}
            >
              {tr(career.shortName)}
            </motion.text>

            {/* Φαρδιά αόρατη γραμμή: κάνει ολόκληρη την ακτίνα εύκολο στόχο */}
            <line
              x1={CX}
              y1={CY}
              x2={hx}
              y2={hy}
              stroke="transparent"
              strokeWidth={30}
            />
          </g>
        );
      })}

      {/* Το πλήρες όνομα εμφανίζεται στο κέντρο, εκεί που κοιτάς ήδη */}
      {hovered !== null && (
        <motion.text
          key={CAREERS[hovered].id}
          x={CX}
          y={CY + 34}
          textAnchor="middle"
          fontSize={13}
          fontWeight={700}
          fill="var(--ink)"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: CY + 40 }}
          animate={{ opacity: 1, y: CY + 34 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          pointerEvents="none"
        >
          {tr(CAREERS[hovered].name)}
        </motion.text>
      )}
    </svg>
  );
}
