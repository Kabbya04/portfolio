export type TimelineEntry = {
  id: string;
  title: string;
  subtitle: string;
  start: string; // YYYY or YYYY-MM
  end?: string | null; // YYYY or YYYY-MM or null for present
  description?: string;
  tags?: string[];
};

export type Project = TimelineEntry & {
  description: string;
  tags: string[];
  github?: string | null;
  live?: string | null;
  accent: string;
};

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const parseYearMonth = (value: string) => {
  const [year, month] = value.split("-").map((part) => Number(part));
  return {
    year,
    month: Number.isFinite(month) ? month : null,
  };
};

export const formatPeriod = (start: string, end?: string | null) => {
  const startParts = parseYearMonth(start);
  const startLabel = startParts.month
    ? `${monthNames[startParts.month - 1]} ${startParts.year}`
    : `${startParts.year}`;

  if (!end) {
    return `${startLabel} · Present`;
  }

  const endParts = parseYearMonth(end);
  const endLabel = endParts.month
    ? `${monthNames[endParts.month - 1]} ${endParts.year}`
    : `${endParts.year}`;

  return `${startLabel} · ${endLabel}`;
};

export const experience: TimelineEntry[] = [
  {
    id: "data-island",
    title: "The Data Island",
    subtitle: "AI Engineer & Frontend Engineer",
    start: "2025-03",
    end: "2025-09",
    description:
      "Built AI and computer vision solutions using Remote Python, FastAPI, Groq AI, Ultralytics YOLO, and PyTorch, paired with Next.js for production-grade UIs.",
    tags: ["FastAPI", "Groq", "YOLO", "PyTorch", "Next.js"],
  },
];

export const education: TimelineEntry[] = [
  {
    id: "nsu",
    title: "North South University",
    subtitle: "BSc in Computer Science & Engineering",
    start: "2022-01",
    end: null,
    description:
      "Focused on intelligent systems, full-stack engineering, and applied AI research.",
    tags: ["AI/ML", "Software Engineering", "Human-centered design"],
  },
];

export const projects: Project[] = [
  {
    id: "airis",
    title: "AIris",
    subtitle: "Vision assistant for the visually impaired",
    start: "2025-01",
    end: null,
    description:
      "AI-powered vision assistant for visually impaired users with local-first inference, spatial audio guidance, and LLM-based scene narration.",
    tags: ["Computer Vision", "YOLO", "MediaPipe", "LLMs"],
    github: "https://github.com/rajin-khan/AIris",
    live: null,
    accent: "#6ea8ff",
  },
  {
    id: "zappy",
    title: "Zappy",
    subtitle: "LLM-powered recommendations",
    start: "2025-08",
    end: null,
    description:
      "Personalized recommendations for games, anime, TV, and movies using Groq-powered LLMs, TVDB data, and Supabase.",
    tags: ["Groq", "LLM", "Supabase", "Recommendations"],
    github: "https://github.com/Kabbya04/zappy",
    live: "https://zappy-theta.vercel.app/",
    accent: "#b7ff5a",
  },
  {
    id: "lumen",
    title: "Lumen",
    subtitle: "Interactive document study tool",
    start: "2025-07",
    end: null,
    description:
      "Document study companion (previously named Crack The Doc) that transforms PDFs into guided summaries, QA, and text-to-speech flows.",
    tags: ["Groq", "Web Speech API", "Summaries", "QA"],
    github: "https://github.com/Kabbya04/Lumen",
    live: null,
    accent: "#ff8a5c",
  },
  {
    id: "nodenest",
    title: "NodeNest",
    subtitle: "Multi-conversation AI chat platform",
    start: "2025-12",
    end: null,
    description:
      "Multi-conversation AI chatbot platform with contextual sub-conversations and modular backend design.",
    tags: ["Chatbots", "Multi-LLM", "Architecture"],
    github: "https://github.com/Kabbya04/NodeNest",
    live: "https://node-nest-omega.vercel.app/",
    accent: "#7dd3fc",
  },
  {
    id: "hazel-studio-bd",
    title: "Hazel Studio BD",
    subtitle: "Modern studio website",
    start: "2025-12",
    end: null,
    description:
      "Website for Hazel Studio BD with a modern frontend, Supabase-backed services, and a secure Postgres data layer.",
    tags: [
      "React 18",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Zustand",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "RLS",
    ],
    github: null,
    live: "https://www.hazelstudiobd.com/",
    accent: "#ffb4d6",
  },
  {
    id: "omni-game",
    title: "Omni Game Recommender",
    subtitle: "TF-IDF + SVM engine",
    start: "2025-04",
    end: null,
    description:
      "Content-based recommendation engine using Bag of Words, TF-IDF, and SVM to predict similar games.",
    tags: ["TF-IDF", "SVM", "Recommender"],
    github: "https://github.com/Kabbya04/Omni-Game-Recommender-System",
    live: null,
    accent: "#4de1c1",
  },
  {
    id: "tapsense",
    title: "TapSense",
    subtitle: "Accessibility-first Flutter app",
    start: "2024-09",
    end: "2024-12",
    description:
      "Cross-platform accessibility app built with Flutter to enhance mobile interaction for visually impaired users.",
    tags: ["Flutter", "Accessibility", "Mobile"],
    github: "https://github.com/Kabbya04/TapSense",
    live: null,
    accent: "#ffd166",
  },
];
