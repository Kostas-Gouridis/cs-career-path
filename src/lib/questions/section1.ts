import type { Section } from "./types";

export const section1: Section = {
  index: 1,
  title: { el: "1-10", en: "1-10" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q01",
      section: 1,
      text: {
        el: "Νιώθω τη μεγαλύτερη ικανοποίηση όταν ένα αποτέλεσμα είναι αισθητά ορατό και μπορώ να το \"αγγίξω\" ή να το δω στην οθόνη.",
        en: "I feel most satisfied when results are tangible and visible"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, dataeng: 35, uiux: 21 }, t: { creative: 14, product: 7 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 18 }, t: { creative: 12, product: 5 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, backend: 14, mobile: 15, product: 16, uiux: 12 }, t: { analytical: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 29, devops: 34, qa: 40 }, t: { systems: 12, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 11, embedded: 23, devops: 27, security: 27, research: 28 }, t: { systems: 14, ops: 10 } }
      ]
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Όταν ένα σύστημα καταρρέει, η πρώτη μου παρόρμηση είναι να καταλάβω τη βαθύτερη αιτία και όχι απλά να το επαναφέρω γρήγορα.",
        en: "System crash: I want to find root cause, not just fix it fast"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, dataeng: 35, uiux: 24 }, t: { creative: 16, product: 7 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 17, product: 16, mobile: 15, qa: 40, uiux: 21 }, t: { creative: 14, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, backend: 14, product: 16, mobile: 15, uiux: 15 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 29, security: 34, devops: 34 }, t: { systems: 12, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 14, embedded: 29, research: 36, security: 34 }, t: { systems: 14, research: 16 } }
      ]
    },
    {
      id: "q03",
      section: 1,
      text: {
        el: "Προτιμώ να δουλεύω πάνω σε προβλήματα που δεν έχουν ακόμα έτοιμη λύση, ακόμα κι αν αυτό σημαίνει ότι θα νιώθω χαμένος/η για μέρες.",
        en: "I prefer unsolved problems over comfortable tasks"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, dataeng: 35, devops: 44 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, dataeng: 27, devops: 34, embedded: 29 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, dataeng: 27, devops: 34, frontend: 17 }, t: { systems: 10, analytical: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, mobile: 15, backend: 14, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 17, product: 16, mobile: 15, research: 36, uiux: 21 }, t: { creative: 14, product: 7 } }
      ]
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Μου είναι αδύνατο να αγνοήσω μια μικρή αισθητική ατέλεια ή μια ασυμμετρία που οι άλλοι θεωρούν ασήμαντη.",
        en: "I cannot ignore small aesthetic flaws or asymmetries"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, backend: 18, security: 45 }, t: { systems: 16, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 29, backend: 14, security: 34, devops: 34 }, t: { systems: 14, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 29, backend: 14, devops: 34, frontend: 17 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, mobile: 15, datasci: 38, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 17, mobile: 15, product: 16, ml: 38, uiux: 21 }, t: { creative: 14, product: 7 } }
      ]
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Απολαμβάνω να βάζω τάξη σε μια ακατάστατη μάζα πληροφοριών, νιώθοντας ότι \"δαμάζω\" το χάος.",
        en: "I enjoy bringing order to chaotic information"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, backend: 18, ml: 50 }, t: { systems: 12, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 29, backend: 14, ml: 38, devops: 34 }, t: { systems: 10, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, ml: 38, embedded: 29, frontend: 17 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, backend: 14, qa: 40, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 17, product: 16, research: 36, qa: 40, uiux: 21 }, t: { creative: 14, research: 16 } }
      ]
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Προτιμώ να συντονίζω μια ομάδα ανθρώπων και να παίρνω στρατηγικές αποφάσεις παρά να εκτελώ ο ίδιος το τεχνικό μέρος.",
        en: "I prefer coordinating teams and strategy over hands-on execution"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, embedded: 38, mobile: 19 }, t: { systems: 16, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, embedded: 29, devops: 34, dataeng: 27 }, t: { systems: 14, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, embedded: 29, devops: 34, frontend: 17 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, mobile: 15, backend: 14, uiux: 18 }, t: { creative: 12, product: 9 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 17, product: 16, mobile: 15, research: 36, uiux: 21 }, t: { creative: 14, product: 9 } }
      ]
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Με γοητεύει η ιδέα να δίνω \"εντολές\" σε αντικείμενα του φυσικού κόσμου ώστε να κινούνται ή να αντιδρούν αυτόνομα.",
        en: "Fascinated by controlling physical objects autonomously"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, backend: 18, security: 45 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 29, backend: 14, security: 34, devops: 34 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, mobile: 15, product: 16, ml: 38, uiux: 21 }, t: { creative: 14, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 29, backend: 14, research: 36, qa: 40 }, t: { systems: 14, research: 16 } }
      ]
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Νιώθω ασφάλεια όταν βασίζω τις αποφάσεις μου αποκλειστικά σε σκληρά δεδομένα και αριθμούς, χωρίς να εμπιστεύομαι το ένστικτό μου.",
        en: "I feel safe when decisions are based on hard data, not intuition"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, backend: 18, security: 45 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 29, backend: 14, devops: 34, qa: 40 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 29, backend: 14, mobile: 15, frontend: 17, uiux: 12 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 18 }, t: { creative: 12, product: 9 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21, uiux: 24 }, t: { creative: 16, product: 9 } }
      ]
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Έχω μια φυσική τάση να υποθέτω το χειρότερο δυνατό σενάριο σε κάθε κατάσταση ώστε να είμαι προετοιμασμένος.",
        en: "I naturally assume worst-case scenarios to be prepared"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, embedded: 38, datasci: 50 }, t: { systems: 16, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, embedded: 29, research: 36, devops: 34 }, t: { systems: 14, research: 16 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, embedded: 29, frontend: 17, research: 36 }, t: { systems: 10, analytical: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, mobile: 15, qa: 40, uiux: 18 }, t: { creative: 12, product: 9 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 17, product: 16, mobile: 15, qa: 40, uiux: 21 }, t: { creative: 14, product: 9 } }
      ]
    },
    {
      id: "q10",
      section: 1,
      text: {
        el: "Μου αρέσει να εξηγώ περίπλοκα πράγματα με απλά λόγια, γεφυρώνοντας το κενό ανάμεσα σε διαφορετικούς ανθρώπους.",
        en: "I enjoy explaining complex ideas simply"
      },
      options: [
        { id: "a", label: { el: "Πάντα", en: "Always" }, c: { qa: 53, backend: 18, security: 45 }, t: { ops: 16, adversarial: 12 } },
        { id: "b", label: { el: "Συχνά", en: "Often" }, c: { qa: 40, backend: 14, security: 34, devops: 34 }, t: { ops: 14, adversarial: 10 } },
        { id: "c", label: { el: "Μερικές φορές", en: "Sometimes" }, c: { qa: 40, backend: 14, frontend: 17, mobile: 15 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Σπάνια", en: "Rarely" }, c: { frontend: 17, product: 16, mobile: 15, backend: 14, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Όχι", en: "Never" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 9 } }
      ]
    }
  ]
};
