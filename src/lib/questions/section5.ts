import type { Section } from "./types";

export const section5: Section = {
  index: 5,
  title: { el: "41-50", en: "41-50" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q41",
      section: 5,
      text: {
        el: "Θέλω η δουλειά μου να εκμεταλλεύεται τις φυσικές ιδιότητες του περιβάλλοντος (π.χ. κίνηση, τοποθεσία, ήχο).",
        en: "My work should leverage physical properties (motion, location, sound)"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 46, ml: 50, backend: 18 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 46, ml: 50, datasci: 50 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 46, ml: 50, backend: 18 }, t: { research: 12, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 9 } }
      ]
    },
    {
      id: "q42",
      section: 5,
      text: {
        el: "Μου αρέσει να αποσυναρμολογώ λογικά ένα πρόβλημα μέχρι να φτάσω στο πιο θεμελιώδες δομικό του στοιχείο.",
        en: "I enjoy decomposing problems to their fundamental building blocks"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, mobile: 19, datasci: 50 }, t: { systems: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 18, devops: 44, embedded: 38 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, devops: 44, security: 45 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q43",
      section: 5,
      text: {
        el: "Προτιμώ να διαμορφώνω το όραμα και τις προτεραιότητες μιας ομάδας παρά να εκτελώ τις οδηγίες άλλων.",
        en: "I prefer shaping team vision over executing orders"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 46, ml: 50, dataeng: 35 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 46, ml: 50, dataeng: 35 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 46, ml: 50, dataeng: 35 }, t: { research: 12, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q44",
      section: 5,
      text: {
        el: "Με συναρπάζει η ιδέα των αυτόνομων ρομπότ που κινούνται και λαμβάνουν αποφάσεις στον πραγματικό κόσμο.",
        en: "Fascinated by autonomous robots making decisions in the real world"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, qa: 53, datasci: 50 }, t: { systems: 12, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 18, qa: 53, embedded: 38 }, t: { systems: 10, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, qa: 53, embedded: 38 }, t: { systems: 8, ops: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q45",
      section: 5,
      text: {
        el: "Μου αρέσει να μετατρέπω έναν ακατάστατο \"ωκεανό\" από στοιχεία σε μια καθαρή, δομημένη βάση.",
        en: "I love turning messy data oceans into clean, structured databases"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 50, backend: 18, devops: 44 }, t: { analytical: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 50, backend: 18, devops: 44 }, t: { analytical: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 50, backend: 18, devops: 44 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q46",
      section: 5,
      text: {
        el: "Θέλω ο χρήστης να νιώθει χαρά, άνεση και οικειότητα από το πρώτο δευτερόλεπτο που αλληλεπιδρά με τη δουλειά μου.",
        en: "Users should feel joy and comfort from first interaction with my work"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, backend: 18, dataeng: 35 }, t: { product: 10, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 21, backend: 18, dataeng: 35 }, t: { product: 9, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 21, backend: 18, dataeng: 35 }, t: { product: 7, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 38, security: 45, qa: 53 }, t: { systems: 10, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 38, security: 45, qa: 53 }, t: { systems: 12, ops: 10 } }
      ]
    },
    {
      id: "q47",
      section: 5,
      text: {
        el: "Με ενδιαφέρει η μυστικότητα και η κρυπτογράφηση μηνυμάτων ώστε να μην μπορεί κανείς ενδιάμεσος να τα διαβάσει.",
        en: "I care about encryption and ensuring no intermediary can read messages"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 46, ml: 50, backend: 18 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 46, ml: 50, backend: 18 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 46, ml: 50, backend: 18 }, t: { research: 12, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q48",
      section: 5,
      text: {
        el: "Απολαμβάνω τη διαδικασία του να \"στρεσάρω\" κάτι στα όριά του για να δω πότε και πώς θα σπάσει.",
        en: "I enjoy stress-testing systems to find their breaking points"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, datasci: 50, uiux: 28 }, t: { creative: 14, people: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 24 }, t: { creative: 12, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 20 }, t: { creative: 10, people: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, devops: 44, embedded: 38 }, t: { systems: 10, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, devops: 44, embedded: 38 }, t: { systems: 12, ops: 10 } }
      ]
    },
    {
      id: "q49",
      section: 5,
      text: {
        el: "Θέλω να γνωρίζω πώς να στήσω μια υποδομή που να αντέχει εκατομμύρια ταυτόχρονους χρήστες χωρίς να καταρρεύσει.",
        en: "I want to architect infrastructure for millions of concurrent users"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, security: 45, mobile: 19 }, t: { ops: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 44, security: 45, backend: 18 }, t: { ops: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 44, security: 45, backend: 18 }, t: { ops: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q50",
      section: 5,
      text: {
        el: "Μου αρέσει να εμβαθύνω στις μαθηματικές πιθανότητες και τη στατιστική.",
        en: "I love diving deep into mathematical probability and statistics"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 50, research: 46, datasci: 50 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 50, research: 46, datasci: 50 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 50, research: 46, datasci: 50 }, t: { research: 16, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    }
  ]
};
