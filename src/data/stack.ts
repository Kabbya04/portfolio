export type StackItem = {
  label: string;
  icon?: string;
  /** Topic-style entries: text only in the popup, excluded from the marquee. */
  conceptOnly?: boolean;
  /** Explicitly exclude from the scrolling marquee. */
  inMarquee?: boolean;
};

export type StackCategory = {
  title: string;
  items: StackItem[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { label: "Python", icon: "python" },
      { label: "JavaScript", icon: "javaScript" },
      { label: "TypeScript", icon: "typeScript" },
      { label: "Java", icon: "java" },
      { label: "Dart", icon: "dart" },
      { label: "C", icon: "C" },
      { label: "C++", icon: "C++" },
      { label: "HTML", icon: "HTML" },
      { label: "CSS", icon: "CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { label: "Node.js", icon: "nodejs" },
      { label: "React", icon: "react" },
      { label: "Next.js", icon: "nextjs" },
      { label: "Astro", icon: "astro" },
      { label: "Tailwind CSS", icon: "tailwindcss" },
      { label: "React Native", icon: "react", inMarquee: false },
      { label: "Flutter", icon: "flutter" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { label: "Generative AI", conceptOnly: true },
      { label: "Large Language Models", conceptOnly: true },
      { label: "LangChain", icon: "langchain", inMarquee: false },
      { label: "RAG", conceptOnly: true },
      { label: "NLP Fundamentals", conceptOnly: true },
      { label: "Computer Vision", conceptOnly: true },
      { label: "Recommendation Systems", conceptOnly: true },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "Vite", icon: "vite" },
      { label: "Vercel", icon: "vercel" },
      { label: "Firebase", icon: "firebase" },
      { label: "Supabase", icon: "supabase" },
      { label: "VS Code", icon: "vscode" },
      { label: "Cursor", icon: "cursor" },
      { label: "Codex", icon: "codex" },
      { label: "Claude Code", icon: "claude-code" },
    ],
  },
];

export const softSkills = [
  "Communication",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Time Management",
];

export const getMarqueeItems = (): StackItem[] =>
  stackCategories.flatMap((category) =>
    category.items.filter(
      (item) => item.icon && !item.conceptOnly && item.inMarquee !== false,
    ),
  );

export const getPopupTechItems = (category: StackCategory): StackItem[] =>
  category.items.filter((item) => item.icon);

export const getConceptItems = (category: StackCategory): StackItem[] =>
  category.items.filter((item) => item.conceptOnly);
