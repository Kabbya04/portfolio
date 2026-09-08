export type TimelineEntry = {
  id: string;
  title: string;
  subtitle: string;
  start: string; // YYYY or YYYY-MM
  end?: string | null; // YYYY or YYYY-MM or null for present
  description?: string;
  tags?: string[];
  badge?: string;
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
    id: "hazel-studio",
    title: "Hazel Studio",
    subtitle: "Technical Lead",
    start: "2025-11",
    end: null,
    description:
      "Built and launched the brand website for a Bangladeshi beauty brand (hazelstudiobd.com) with React, Vite, and Supabase. I maintain the site and ship feature updates and content changes as the brand requests them.",
    tags: ["React", "Vite", "Supabase", "Tailwind CSS"],
    badge: "Remote",
  },
  {
    id: "data-island",
    title: "The Data Island",
    subtitle: "AI Engineer & Frontend Engineer (Part-time)",
    start: "2025-03",
    end: "2025-09",
    description:
      "Developed computer vision and AI-powered client solutions with Python, FastAPI, Groq AI, Ultralytics YOLO, and PyTorch. Built responsive Next.js interfaces and collaborated remotely to deliver end-to-end AI features.",
    tags: ["FastAPI", "Groq", "YOLO", "PyTorch", "Next.js"],
    badge: "Hybrid",
  },
  {
    id: "discount-den",
    title: "Discount Den",
    subtitle: "Technical Lead",
    start: "2023-01",
    end: "2024-02",
    description:
      "Led website planning and development for a student-founded venture. Built the initial site with HTML, CSS, and Bootstrap, then migrated to WordPress hosted on Hostinger.",
    tags: ["HTML", "CSS", "Bootstrap", "WordPress"],
    badge: "Venture",
  },
];

export const education: TimelineEntry[] = [
  {
    id: "nsu",
    title: "North South University",
    subtitle: "BS in Computer Science and Engineering",
    start: "2022-01",
    end: "2025-12",
    description:
      "Focused on intelligent systems, full-stack engineering, and applied AI research. GPA: 3.66.",
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
      "Local-first vision assistant with ESP32-CAM, YOLO26s, and MediaPipe for real-time spatial guidance (sub-two-second latency). Includes scene description via BLIP/LLMs, fall detection with guardian alerts, and a hands-free Web Speech API interface—87% object-retrieval success rate.",
    tags: ["Computer Vision", "YOLO26", "MediaPipe", "LLMs", "ESP32"],
    github: "https://github.com/rajin-khan/AIris",
    live: null,
    accent: "#6ea8ff",
  },
  {
    id: "gravitas",
    title: "Gravitas",
    subtitle: "Legal document understanding & drafting",
    start: "2026-05",
    end: null,
    description:
      "AI legal document understanding and grounded drafting with OCR, RAG, and iterative draft refinement from operator edits.",
    tags: ["OCR", "RAG", "LLMs", "Legal Tech"],
    github: "https://github.com/Kabbya04/Gravitas",
    live: null,
    accent: "#a78bfa",
  },
  {
    id: "honey-and-hue",
    title: "Honey & Hue",
    subtitle: "Gift & accessories storefront",
    start: "2026-08",
    end: null,
    description:
      "A website for a Dhaka, Bangladesh-based small business selling gift items, accessories, and more.",
    tags: ["E-commerce", "Small Business", "Vercel"],
    github: null,
    live: "https://honey-and-hue.vercel.app/",
    accent: "#f0abfc",
  },
  {
    id: "zappy",
    title: "Zappy",
    subtitle: "LLM-powered recommendations",
    start: "2025-08",
    end: null,
    description:
      "Personalized recommendations for games, anime, TV series, and movies using Groq LLMs, TVDB for up-to-date metadata, and Supabase.",
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
      "Document study tool that transforms documents into interactive guides with summaries, QA, chat, and TTS via Groq and ElevenLabs.",
    tags: ["Groq", "ElevenLabs", "Summaries", "QA", "Chat"],
    github: "https://github.com/Kabbya04/Lumen",
    live: "https://study-lumen.vercel.app/",
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
    id: "omni-game",
    title: "Omni Game Recommender",
    subtitle: "TF-IDF + SVM engine",
    start: "2025-04",
    end: "2025-04",
    description:
      "Content-based game recommendation engine using Bag of Words, TF-IDF, and SVM.",
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
      "Cross-platform accessibility app for visually impaired users, built with Flutter.",
    tags: ["Flutter", "Accessibility", "Mobile"],
    github: "https://github.com/Kabbya04/TapSense",
    live: null,
    accent: "#ffd166",
  },
];
