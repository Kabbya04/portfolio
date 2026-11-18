import { formatPeriod } from "./dates";

export type ProjectCaseSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  start: string;
  end?: string | null;
  summary: string;
  tags: string[];
  accent: string;
  featured?: boolean;
  archive?: boolean;
  github?: string | null;
  live?: string | null;
  visualLabel: string;
  sections: ProjectCaseSection[];
};

export const projects: Project[] = [
  {
    slug: "box-box",
    title: "Box-Box",
    subtitle: "Formula 1 podium calls as probabilities, not bravado",
    category: "Sports Analytics",
    start: "2026-09",
    end: null,
    summary:
      "A probabilistic Formula 1 podium prediction system using XGBoost, Monte Carlo simulation, and SHAP, with a FastAPI backend and Next.js frontend.",
    tags: ["XGBoost", "Monte Carlo", "SHAP", "FastAPI", "Next.js"],
    accent: "#e85d4c",
    featured: true,
    github: "https://github.com/Kabbya04/Box-Box",
    live: "https://box-box-predict.vercel.app/",
    visualLabel: "Telemetry · Uncertainty · Motorsport",
    sections: [
      {
        heading: "The idea",
        body: "Race predictions that pretend certainty are usually wrong in an interesting way. Box-Box was a chance to show podium outcomes as distributions people can interrogate.",
      },
      {
        heading: "Approach",
        body: "XGBoost produces base predictions. Monte Carlo sampling turns those into podium probability surfaces. SHAP values explain which features pushed a driver up or down. FastAPI serves the model layer. Next.js carries the interface.",
      },
      {
        heading: "Still open",
        body: "The useful part is not a perfect tip. It is making uncertainty visible enough that a wrong call still teaches something.",
      },
    ],
  },
  {
    slug: "gravitas",
    title: "Gravitas",
    subtitle: "Legal drafting that stays tied to the source documents",
    category: "Legal Tech · RAG",
    start: "2026-05",
    end: null,
    summary:
      "AI legal document understanding and grounded drafting with OCR, RAG, and iterative refinement from operator edits.",
    tags: ["OCR", "RAG", "LLMs", "Legal Tech"],
    accent: "#4f7cac",
    featured: true,
    github: "https://github.com/Kabbya04/Gravitas",
    live: null,
    visualLabel: "Documents · Grounding · Iteration",
    sections: [
      {
        heading: "The idea",
        body: "Legal drafting tools fail when they sound fluent and drift from the source. Gravitas started from the opposite constraint: every draft move should stay inspectable against the documents that justify it.",
      },
      {
        heading: "Approach",
        body: "OCR pulls text out of messy uploads. Retrieval keeps generation close to relevant passages. Operator edits feed the next draft pass, so the system improves through use instead of pretending one-shot perfection.",
      },
      {
        heading: "What matters here",
        body: "The product is less about clever prompting and more about a workflow where a human can trust, correct, and continue.",
      },
    ],
  },
  {
    slug: "zappy",
    title: "Zappy",
    subtitle: "Recommendations with fresh metadata and a lighter touch",
    category: "Recommendations",
    start: "2025-08",
    end: null,
    summary:
      "Personalized recommendations for games, anime, TV series, and movies using Groq LLMs, TVDB metadata, and Supabase.",
    tags: ["Groq", "LLM", "Supabase", "Recommendations"],
    accent: "#d4a056",
    featured: true,
    github: "https://github.com/Kabbya04/zappy",
    live: "https://zappy-theta.vercel.app/",
    visualLabel: "Taste · Media · Conversation",
    sections: [
      {
        heading: "The idea",
        body: "I wanted recommendations that could talk about taste without freezing a stale catalog into the model.",
      },
      {
        heading: "Approach",
        body: "Groq handles the conversational layer. TVDB keeps titles and metadata current. Supabase holds the application data. The system is happiest when it helps someone explore, not when it claims to know them.",
      },
    ],
  },
  {
    slug: "lumen",
    title: "Lumen",
    subtitle: "Study tools that turn documents into something you can ask",
    category: "Education · LLM Apps",
    start: "2025-07",
    end: null,
    summary:
      "A document study tool that turns uploads into interactive guides with summaries, QA, chat, and TTS via Groq and ElevenLabs.",
    tags: ["Groq", "ElevenLabs", "Summaries", "QA"],
    accent: "#e07a5f",
    github: "https://github.com/Kabbya04/Lumen",
    live: "https://study-lumen.vercel.app/",
    visualLabel: "Study · Speech · Documents",
    sections: [
      {
        heading: "The idea",
        body: "Long PDFs are easy to collect and hard to study. Lumen was a pass at making a document answer questions, summarize itself, and speak when reading densifies into fog.",
      },
      {
        heading: "Approach",
        body: "Groq powers the language features. ElevenLabs covers text-to-speech. The useful part is the loop between summary, question, and spoken review.",
      },
    ],
  },
  {
    slug: "nodenest",
    title: "NodeNest",
    subtitle: "Chat that branches when one thread is not enough",
    category: "Chat Platforms",
    start: "2025-12",
    end: null,
    summary:
      "A multi-conversation AI chatbot platform with contextual sub-conversations and a modular backend.",
    tags: ["Chatbots", "Multi-LLM", "Architecture"],
    accent: "#3d8bfd",
    github: "https://github.com/Kabbya04/NodeNest",
    live: "https://node-nest-omega.vercel.app/",
    visualLabel: "Conversation · Structure · Modularity",
    sections: [
      {
        heading: "The idea",
        body: "Serious work rarely lives in a single chat scroll. NodeNest explores branching conversations without losing the parent context.",
      },
      {
        heading: "Approach",
        body: "The interesting engineering was less the model choice and more the conversation graph: how sub-threads stay related, and how the backend stays modular enough to swap providers.",
      },
    ],
  },
  {
    slug: "honey-and-hue",
    title: "Honey & Hue",
    subtitle: "A small-business storefront with room to breathe",
    category: "Commerce · Web",
    start: "2026-08",
    end: null,
    summary:
      "A website for a Dhaka-based small business selling gift items and accessories.",
    tags: ["E-commerce", "Small Business", "Vercel"],
    accent: "#a6a69d",
    github: null,
    live: "https://honey-and-hue.vercel.app/",
    visualLabel: "Retail · Local · Presentation",
    sections: [
      {
        heading: "The idea",
        body: "A local shop needed a clean place to show products without looking like a template storefront that could belong to anyone.",
      },
      {
        heading: "Approach",
        body: "Keep the site light, readable, and easy for the owner to iterate. The constraint was clarity for customers, not feature count.",
      },
    ],
  },
  {
    slug: "omni-game",
    title: "Omni Game Recommender",
    subtitle: "A classical recommender before the LLM wave",
    category: "Recommendations",
    start: "2025-04",
    end: "2025-04",
    summary:
      "Content-based game recommendation using Bag of Words, TF-IDF, and SVM.",
    tags: ["TF-IDF", "SVM", "Recommender"],
    accent: "#879889",
    archive: true,
    github: "https://github.com/Kabbya04/Omni-Game-Recommender-System",
    live: null,
    visualLabel: "Classical ML · Games",
    sections: [
      {
        heading: "Why it still matters",
        body: "Before Zappy, Omni was the quieter reminder that good recommendations can come from well-chosen features and a simple model when the data fit is honest.",
      },
    ],
  },
  {
    slug: "tapsense",
    title: "TapSense",
    subtitle: "Accessibility experiments on mobile",
    category: "Accessibility · Mobile",
    start: "2024-09",
    end: "2024-12",
    summary:
      "A cross-platform accessibility app for visually impaired users, built with Flutter.",
    tags: ["Flutter", "Accessibility", "Mobile"],
    accent: "#687a62",
    archive: true,
    github: "https://github.com/Kabbya04/TapSense",
    live: null,
    visualLabel: "Mobile · Accessibility",
    sections: [
      {
        heading: "Why it still matters",
        body: "TapSense was an earlier pass at accessibility-first mobile design. AIris later carried the same concern into hardware-backed vision guidance.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);

export const workshopProjects = projects.filter((project) => !project.archive);

export const archiveProjects = projects.filter((project) => project.archive);

export const projectPeriod = (project: Project) =>
  formatPeriod(project.start, project.end);
