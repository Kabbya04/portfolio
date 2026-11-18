import { formatPeriod } from "./dates";

export type TimelineEntry = {
  id: string;
  title: string;
  subtitle: string;
  start: string;
  end?: string | null;
  description?: string;
  tags?: string[];
  badge?: string;
};

export type Publication = TimelineEntry & {
  description: string;
  venue: string;
  authors: string[];
  doi?: string | null;
  github?: string | null;
  tags?: string[];
};

export const about = {
  heading: "The person behind the builds",
  lede: "I'm Kabbya. I figure out how systems behave, then turn that into tools people can actually use.",
  paragraphs: [
    "Most of my work sits between AI engineering and frontend craft. I build the model path and the interface that makes it feel trustworthy.",
    "Right now that means assistive vision, grounded language tools, continual learning, and the small product details that decide whether something ships.",
  ],
};

export const experience: TimelineEntry[] = [
  {
    id: "hazel-studio",
    title: "Hazel Studio",
    subtitle: "Technical Lead",
    start: "2025-11",
    end: null,
    description:
      "Built and launched the brand website for a Bangladeshi beauty brand with React, Vite, and Supabase. I still maintain the site and ship updates as the brand needs them.",
    tags: ["React", "Vite", "Supabase", "Tailwind CSS"],
    badge: "Remote",
  },
  {
    id: "data-island",
    title: "The Data Island",
    subtitle: "AI Engineer & Frontend Engineer",
    start: "2025-03",
    end: "2025-09",
    description:
      "Built computer vision and AI client solutions with Python, FastAPI, Groq, YOLO, and PyTorch, then wrapped them in responsive Next.js interfaces.",
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
      "Led website planning and development for a student-founded venture. Started in HTML, CSS, and Bootstrap, then moved the site to WordPress.",
    tags: ["HTML", "CSS", "Bootstrap", "WordPress"],
    badge: "Venture",
  },
];

export const research: TimelineEntry[] = [
  {
    id: "ciasl",
    title: "NSU CIASL",
    subtitle: "Research Assistant",
    start: "2026-06",
    end: null,
    description:
      "Contributing to research on intelligent security systems under lab supervision, with support across experimental design, literature review, implementation, and documentation.",
    badge: "Lab",
  },
  {
    id: "nsu-researcher",
    title: "North South University ECE",
    subtitle: "Undergraduate Researcher",
    start: "2025-05",
    end: null,
    description:
      "Working on CALM, a training-free continual learning framework, and AIris, a local-first assistive vision system that later became a published paper.",
    badge: "Research",
  },
];

export const education: TimelineEntry[] = [
  {
    id: "nsu",
    title: "North South University",
    subtitle: "BS in Computer Science and Engineering",
    start: "2022-01",
    end: "2025-12",
    description: "Intelligent systems, full-stack engineering, and applied AI research. GPA: 3.66.",
    tags: ["AI/ML", "Software Engineering", "Human-centered design"],
  },
];

export const publications: Publication[] = [
  {
    id: "airis-sncs",
    title: "AIris: An AI-Powered Vision Assistant for the Visually Impaired",
    subtitle: "SN Computer Science, vol. 7, no. 8",
    start: "2026",
    end: "2026",
    venue: "SN Computer Science, vol. 7, no. 8",
    authors: [
      "Adib Ar Rahman Khan",
      "Saumik Saha Kabbya",
      "Rashedur M. Rahman",
    ],
    description:
      "Host-based assistive vision prototype that guides users to household objects through audio feedback. Framed as an interaction controller rather than a new perception model. Reported 90% success in blindfolded locate-and-grasp trials and 88.8% target-hit rate across 250 household trials, with 340 ms mean guidance-cycle latency.",
    doi: "https://doi.org/10.1007/s42979-026-05445-z",
    github: "https://github.com/rajin-khan/AIris",
    tags: ["Assistive AI", "Computer Vision", "YOLO26", "MediaPipe"],
    badge: "Journal",
  },
];

export { formatPeriod };
