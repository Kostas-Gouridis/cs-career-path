
import type { Section } from "./types";

/**
 * Το σύντομο τεστ: δικές του 20 ερωτήσεις (s01…s20), άλλης φιλοσοφίας από τις
 * 100 του πλήρους. Εκεί δίνουμε καταστάσεις και ζητάμε σκέψη· εδώ ζητάμε
 * ένστικτο — μικρές ερωτήσεις, μικρές επιλογές, 2-3 λεπτά, χοντρικό αποτέλεσμα.
 *
 * The quick test has its own 20 questions with a different premise from the
 * full 100: gut reaction instead of deliberation. Short prompts, short options,
 * 2-3 minutes, a rough answer.
 */

export const shortSection1: Section = {
  index: 1,
  title: { el: "Με το ένστικτο", en: "Gut reaction" },
  subtitle: {
    el: "Δέκα γρήγορες ερωτήσεις, καμία τεχνική. Μη σκέφτεσαι πολύ — η πρώτη σου αντίδραση μετράει.",
    en: "Ten quick questions, none of them technical. Don't overthink — your first reaction is what counts.",
  },
  questions: [
    {
      id: "s01",
      section: 1,
      text: { el: "Τι θα προτιμούσες να κάνεις σήμερα;", en: "What would you rather do today?" },
      options: [
        {
          id: "a",
          label: { el: "Να φτιάξω κάτι που φαίνεται", en: "Make something you can see" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Να καταλάβω πώς δουλεύει κάτι", en: "Work out how something works" },
          c: { backend: 2, embedded: 3 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Να βάλω σε τάξη κάτι μπερδεμένο", en: "Put something messy in order" },
          c: { dataeng: 3, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Να βρω τι δεν πάει καλά", en: "Find what's wrong" },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: { el: "Να βγάλω άκρη από ένα σωρό στοιχεία", en: "Make sense of a pile of information" },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "f",
          label: { el: "Να πείσω κάποιον για κάτι", en: "Convince someone of something" },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "s02",
      section: 1,
      text: { el: "Τι σε εκνευρίζει πιο πολύ;", en: "What annoys you most?" },
      options: [
        {
          id: "a",
          label: { el: "Κάτι άσχημο και μπερδεμένο", en: "Something ugly and confusing" },
          c: { frontend: 3, product: 1, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Κάτι που αργεί χωρίς λόγο", en: "Something slow for no reason" },
          c: { backend: 2, embedded: 3 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Να το ξανακάνω με το χέρι κάθε φορά", en: "Redoing it by hand every time" },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Νούμερα που δεν βγάζουν νόημα", en: "Numbers that don't add up" },
          c: { datasci: 3, dataeng: 1 },
          t: { analytical: 3 },
        },
        {
          id: "e",
          label: { el: "Να μη με ακούει κανείς", en: "Nobody listening" },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "s03",
      section: 1,
      text: {
        el: "Ποιο επάγγελμα εκτός πληροφορικής σου μοιάζει;",
        en: "Which job outside tech feels like you?",
      },
      options: [
        {
          id: "a",
          label: { el: "Καλλιτέχνης", en: "Artist" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Μηχανικός αυτοκινήτων", en: "Car mechanic" },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Ντετέκτιβ", en: "Detective" },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: { el: "Ερευνητής", en: "Researcher" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: { el: "Μαέστρος", en: "Conductor" },
          c: { product: 3, devops: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "s04",
      section: 1,
      text: {
        el: "Ποιο μάθημα της σχολής σου κάθεται καλύτερα;",
        en: "Which university course sits best with you?",
      },
      options: [
        {
          id: "a",
          label: { el: "Δομές δεδομένων και αλγόριθμοι", en: "Data structures and algorithms" },
          c: { research: 2, backend: 2, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: { el: "Βάσεις δεδομένων", en: "Databases" },
          c: { dataeng: 3, backend: 1, datasci: 1 },
          t: { ops: 1, analytical: 2 },
        },
        {
          id: "c",
          label: { el: "Λειτουργικά συστήματα και δίκτυα", en: "Operating systems and networks" },
          c: { devops: 3, embedded: 2, security: 2 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: { el: "Γραφικά και διεπαφές χρήστη", en: "Graphics and user interfaces" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "e",
          label: { el: "Τεχνολογία λογισμικού και διαχείριση έργων", en: "Software engineering and project management" },
          c: { product: 3, qa: 2 },
          t: { people: 2, product: 2 },
        },
        {
          id: "f",
          label: { el: "Πιθανότητες και στατιστική", en: "Probability and statistics" },
          c: { datasci: 3, ml: 2 },
          t: { analytical: 3 },
        },
      ],
    },
    {
      id: "s05",
      section: 1,
      text: {
        el: "Τι θα ήθελες να σε περιμένει το πρωί;",
        en: "What would you want waiting for you in the morning?",
      },
      options: [
        {
          id: "a",
          label: { el: "Ένα σχέδιο για υλοποίηση", en: "A design to build" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Κάτι χαλασμένο που πρέπει να ξαναδουλέψει", en: "Something broken that must run again" },
          c: { devops: 3, security: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: { el: "Ένας σωρός στοιχεία", en: "A pile of information" },
          c: { datasci: 3, dataeng: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: { el: "Ένα άλυτο ερώτημα", en: "An unanswered question" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: { el: "Άνθρωποι που περιμένουν να αποφασίσουμε", en: "People waiting for a decision" },
          c: { product: 3 },
          t: { people: 2, product: 2 },
        },
      ],
    },
    {
      id: "s06",
      section: 1,
      text: { el: "Πόσο θέλεις να φαίνεται η δουλειά σου;", en: "How visible do you want your work?" },
      options: [
        {
          id: "a",
          label: { el: "Να τη δείχνω σε φίλους", en: "Something I can show friends" },
          c: { frontend: 3, mobile: 2, product: 1, uiux: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: { el: "Να τη χρησιμοποιούν χωρίς να το ξέρουν", en: "Used without anyone knowing" },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: { el: "Να φαίνεται μόνο όταν λείψει", en: "Noticed only when it's gone" },
          c: { devops: 3, embedded: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Να την εκτιμούν όσοι ξέρουν", en: "Respected by those who know" },
          c: { research: 3, security: 2 },
          t: { research: 2, adversarial: 1 },
        },
      ],
    },
    {
      id: "s07",
      section: 1,
      text: { el: "Τι σε κουράζει πιο γρήγορα;", en: "What tires you fastest?" },
      options: [
        {
          id: "a",
          label: { el: "Πολλή κουβέντα", en: "Too much talking" },
          c: { embedded: 3, research: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: { el: "Να είμαι μόνος όλη μέρα", en: "Being alone all day" },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: { el: "Να κάνω το ίδιο πράγμα ξανά", en: "Doing the same thing again" },
          c: { ml: 2, frontend: 2, product: 1, uiux: 2 },
          t: { creative: 2 },
        },
        {
          id: "d",
          label: { el: "Να μην ξέρω αν προχωράω", en: "Not knowing if I'm getting anywhere" },
          c: { qa: 2, devops: 2, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: { el: "Να μη μπορώ να συγκεντρωθώ", en: "Never getting a clear head" },
          c: { research: 2, ml: 2, backend: 1 },
          t: { research: 2 },
        },
      ],
    },
    {
      id: "s08",
      section: 1,
      text: {
        el: "Σε παίρνουν στις 3 τα ξημερώματα γιατί κάτι χάλασε:",
        en: "You get a 3am call because something broke:",
      },
      options: [
        {
          id: "a",
          label: { el: "Σηκώνομαι με αδρεναλίνη", en: "I'm up, adrenaline going" },
          c: { devops: 3, security: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: { el: "Καμιά φορά, όχι μόνιμα", en: "Sometimes, not always" },
          c: { backend: 2, mobile: 2, dataeng: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "c",
          label: { el: "Θα φρόντιζα να μη χτυπήσει ποτέ", en: "I'd make sure it never rings" },
          c: { qa: 3, embedded: 2 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: { el: "Ποτέ. Το βράδυ είναι δικό μου", en: "Never. Nights are mine" },
          c: { research: 2, datasci: 2, frontend: 1 },
          t: { research: 2 },
        },
      ],
    },
    {
      id: "s09",
      section: 1,
      text: { el: "Μαθηματικά;", en: "Mathematics?" },
      options: [
        {
          id: "a",
          label: { el: "Τα λατρεύω", en: "I love them" },
          c: { ml: 3, research: 3 },
          t: { analytical: 3, research: 1 },
        },
        {
          id: "b",
          label: { el: "Εργαλείο, όταν χρειάζεται", en: "A tool, when needed" },
          c: { datasci: 2, backend: 2, embedded: 2 },
          t: { analytical: 2, systems: 1 },
        },
        {
          id: "c",
          label: { el: "Τα ανέχομαι", en: "I tolerate them" },
          c: { dataeng: 2, qa: 2, devops: 2 },
          t: { ops: 2 },
        },
        {
          id: "d",
          label: { el: "Όσο πιο μακριά, τόσο καλύτερα", en: "The further away the better" },
          c: { frontend: 3, product: 2, mobile: 1, uiux: 2 },
          t: { creative: 2, product: 1 },
        },
      ],
    },
    {
      id: "s10",
      section: 1,
      text: {
        el: "Πώς θα περιέγραφες τον εαυτό σου σε έναν άγνωστο;",
        en: "How would you describe yourself to a stranger?",
      },
      options: [
        {
          id: "a",
          label: { el: "«Φτιάχνω πράγματα»", en: "\"I make things\"" },
          c: { frontend: 3, mobile: 2, embedded: 1, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "«Κρατάω πράγματα όρθια»", en: "\"I keep things standing\"" },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: { el: "«Βρίσκω τι κρύβεται»", en: "\"I find what's hidden\"" },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: { el: "«Βγάζω απαντήσεις από αριθμούς»", en: "\"I get answers out of numbers\"" },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "e",
          label: { el: "«Βάζω ανθρώπους να συνεννοηθούν»", en: "\"I get people to agree\"" },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
  ],
};

export const shortSection2: Section = {
  index: 2,
  title: { el: "Άλλα δέκα, ίδιος ρυθμός", en: "Ten more, same pace" },
  subtitle: {
    el: "Ακόμα δέκα γρήγορες και βγαίνει το αποτέλεσμα.",
    en: "Ten more quick ones, then your result.",
  },
  questions: [
    {
      id: "s11",
      section: 2,
      text: { el: "Τι σε τραβάει περισσότερο;", en: "Which pulls you most?" },
      options: [
        {
          id: "a",
          label: { el: "Μια εφαρμογή στο κινητό σου", en: "An app on your phone" },
          c: { mobile: 3, frontend: 1, uiux: 2 },
          t: { creative: 2 },
        },
        {
          id: "b",
          label: { el: "Μια πλακέτα με αισθητήρες και μοτέρ", en: "A board with sensors and motors" },
          c: { embedded: 3 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Εκατό servers που πρέπει να μείνουν όρθιοι", en: "A hundred servers that must stay up" },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Μια βάση με εκατομμύρια εγγραφές", en: "A database with millions of rows" },
          c: { dataeng: 3, datasci: 1 },
          t: { analytical: 2, ops: 1 },
        },
        {
          id: "e",
          label: { el: "Μια αίθουσα γεμάτη κόσμο", en: "A room full of people" },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "s12",
      section: 2,
      text: { el: "Τι θα σε έκανε περήφανο;", en: "What would make you proud?" },
      options: [
        {
          id: "a",
          label: { el: "Κάτι όμορφο", en: "Something beautiful" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Κάτι που δεν πέφτει ποτέ", en: "Something that never falls over" },
          c: { devops: 3, backend: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: { el: "Κάτι που δεν κατάφερε κανείς να σπάσει", en: "Something nobody managed to break" },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: { el: "Κάτι που δεν το είχε σκεφτεί κανείς", en: "Something nobody had thought of" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: { el: "Κάτι που βοήθησε πολύ κόσμο", en: "Something that helped a lot of people" },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "s13",
      section: 2,
      text: { el: "Πόσο θέλεις να μιλάς με κόσμο;", en: "How much do you want to talk to people?" },
      options: [
        {
          id: "a",
          label: { el: "Μισή μέρα, ευχαρίστως", en: "Half the day, happily" },
          c: { product: 3 },
          t: { people: 3, product: 1 },
        },
        {
          id: "b",
          label: { el: "Μία-δύο ώρες", en: "An hour or two" },
          c: { datasci: 2, frontend: 2, qa: 1 },
          t: { people: 2 },
        },
        {
          id: "c",
          label: { el: "Όσο χρειάζεται, όχι παραπάνω", en: "As much as needed, no more" },
          c: { backend: 2, dataeng: 2, devops: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "d",
          label: { el: "Σχεδόν καθόλου", en: "Almost never" },
          c: { embedded: 3, research: 2 },
          t: { systems: 2, research: 2 },
        },
      ],
    },
    {
      id: "s14",
      section: 2,
      text: { el: "Κάτι χάλασε ξαφνικά. Πρώτη σκέψη:", en: "Something broke suddenly. First thought:" },
      options: [
        {
          id: "a",
          label: { el: "«Ποιους αφορά;»", en: "\"Who does this affect?\"" },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: { el: "«Πώς το γυρνάω πίσω;»", en: "\"How do I undo it?\"" },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: { el: "«Γιατί δεν το είδαμε νωρίτερα;»", en: "\"Why didn't we see it coming?\"" },
          c: { qa: 3, embedded: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: { el: "«Τι άλλο κρύβεται;»", en: "\"What else is hiding?\"" },
          c: { security: 3, research: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: { el: "«Γιατί ακριβώς συνέβη;»", en: "\"Why exactly did it happen?\"" },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "s15",
      section: 2,
      text: {
        el: "Τι θα ήθελες να ξέρεις σε έναν χρόνο;",
        en: "What would you want to know a year from now?",
      },
      options: [
        {
          id: "a",
          label: { el: "Να φτιάχνω γρήγορα ωραία πράγματα", en: "How to make nice things fast" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Πώς δουλεύουν τα πράγματα από μέσα", en: "How things work on the inside" },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Πώς κρατιέται κάτι μεγάλο σε λειτουργία", en: "How something large stays running" },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Πώς βγάζεις σωστά συμπεράσματα", en: "How to reach sound conclusions" },
          c: { datasci: 3, ml: 2 },
          t: { analytical: 3 },
        },
        {
          id: "e",
          label: { el: "Πώς πείθεις ανθρώπους", en: "How to persuade people" },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "s16",
      section: 2,
      text: { el: "Πού θα ήθελες να δουλέψεις;", en: "Where would you want to work?" },
      options: [
        {
          id: "a",
          label: { el: "Κάτι νέο, πέντε άτομα", en: "Something new, five people" },
          c: { product: 3, frontend: 2, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: { el: "Κάτι μεγάλο και σταθερό", en: "Something big and stable" },
          c: { backend: 2, devops: 2, qa: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: { el: "Πανεπιστήμιο ή εργαστήριο", en: "A university or a lab" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: { el: "Κάπου με αυστηρούς κανόνες και σοβαρές συνέπειες", en: "Somewhere with strict rules and real consequences" },
          c: { security: 3, embedded: 2 },
          t: { adversarial: 2, systems: 1 },
        },
      ],
    },
    {
      id: "s17",
      section: 2,
      text: {
        el: "Πόσο συχνά θέλεις να τελειώνει κάτι;",
        en: "How often do you want something to be finished?",
      },
      options: [
        {
          id: "a",
          label: { el: "Κάθε μέρα κάτι", en: "Something every day" },
          c: { frontend: 3, qa: 2, mobile: 1, uiux: 2 },
          t: { creative: 2, ops: 1 },
        },
        {
          id: "b",
          label: { el: "Κάθε μήνα κάτι", en: "Something every month" },
          c: { backend: 2, dataeng: 2, product: 2 },
          t: { systems: 1, product: 1 },
        },
        {
          id: "c",
          label: { el: "Κάθε χρόνο κάτι μεγάλο", en: "Something big every year" },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: { el: "Ποτέ — όλα ζωντανά και σε κίνηση", en: "Never — it's all alive and moving" },
          c: { devops: 3, security: 2 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "s18",
      section: 2,
      text: { el: "Τι θα διάβαζες με ευχαρίστηση;", en: "What would you happily read?" },
      options: [
        {
          id: "a",
          label: { el: "Πώς σχεδιάστηκε κάτι όμορφο", en: "How something beautiful was designed" },
          c: { frontend: 3, product: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Πώς φτιάχτηκε μια μεγάλη κατασκευή", en: "How a great structure was built" },
          c: { backend: 2, embedded: 3 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: { el: "Πώς έγινε και πώς αποκαλύφθηκε μια απάτη", en: "How a fraud was pulled off and uncovered" },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: { el: "Μια επιστημονική μελέτη", en: "A scientific study" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: { el: "Πώς μια εταιρεία κατέρρευσε ή απογειώθηκε", en: "How a company collapsed or took off" },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "s19",
      section: 2,
      text: { el: "Σε ομαδική εργασία αναλαμβάνεις:", en: "In group work you take on:" },
      options: [
        {
          id: "a",
          label: { el: "Την παρουσίαση", en: "The presentation" },
          c: { product: 3, frontend: 1 },
          t: { people: 2, product: 2 },
        },
        {
          id: "b",
          label: { el: "Το μάζεμα και την τακτοποίηση του υλικού", en: "Gathering and organising the material" },
          c: { dataeng: 3, backend: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "c",
          label: { el: "Τον τελικό έλεγχο πριν παραδοθεί", en: "The final check before handing in" },
          c: { qa: 3, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: { el: "Το δύσκολο κομμάτι που φοβούνται οι άλλοι", en: "The hard part the others are scared of" },
          c: { ml: 3, research: 2, embedded: 1 },
          t: { analytical: 2, research: 1 },
        },
        {
          id: "e",
          label: { el: "Το να δείχνει καλό το τελικό αποτέλεσμα", en: "Making the final thing look good" },
          c: { frontend: 3, mobile: 2, uiux: 3 },
          t: { creative: 3 },
        },
      ],
    },
    {
      id: "s20",
      section: 2,
      text: {
        el: "Σε μία φράση, τι θέλεις από τη δουλειά σου;",
        en: "In one line, what do you want from your work?",
      },
      options: [
        {
          id: "a",
          label: { el: "Να φτιάχνω πράγματα", en: "To make things" },
          c: { frontend: 2, mobile: 3, embedded: 2, uiux: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: { el: "Να λύνω γρίφους", en: "To solve puzzles" },
          c: { ml: 2, research: 2, security: 2 },
          t: { analytical: 2, adversarial: 1 },
        },
        {
          id: "c",
          label: { el: "Να κρατάω τάξη", en: "To keep order" },
          c: { devops: 3, dataeng: 2, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: { el: "Να αλλάζω κάτι για κόσμο", en: "To change something for people" },
          c: { product: 3, datasci: 2 },
          t: { product: 3, people: 1 },
        },
        {
          id: "e",
          label: { el: "Να μαθαίνω συνέχεια", en: "To keep learning" },
          c: { research: 3, ml: 1 },
          t: { research: 3 },
        },
      ],
    },
  ],
};

export const SHORT_SECTIONS = [shortSection1, shortSection2];
