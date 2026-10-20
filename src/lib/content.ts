export const tagline = "A personal workspace for everything that matters.";

export const screens = [
  { id: "overview", label: "Overview", image: "/Images/overview.png", width: 751, height: 1600, title: "Your day, in perspective.", description: "See tasks, habits, and spending together in one considered daily overview." },
  { id: "expenses", label: "Expenses", image: "/Images/expenses.png", width: 755, height: 1600, title: "Know where it goes.", description: "Keep expenses visible and make your spending easier to understand." },
  { id: "notes", label: "Notes", image: "/Images/notes.png", width: 754, height: 1600, title: "Keep useful things close.", description: "Give your thoughts and important information a place of their own." },
  { id: "to-dos", label: "To-dos", image: "/Images/to-dos.png", width: 756, height: 1600, title: "Make the next step clear.", description: "Give everyday responsibilities a clear place." },
  { id: "habits", label: "Habits", image: "/Images/habits.png", width: 757, height: 1600, title: "Build a steadier rhythm.", description: "Notice the small actions that help build consistency." },
] as const;

export type Screen = (typeof screens)[number];
