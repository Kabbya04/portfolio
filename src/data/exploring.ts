export type ExploringItem = {
  id: string;
  topic: string;
  description: string;
  status: "Reading" | "Building" | "Researching" | "Playing";
  link?: string | null;
};

export const exploring: ExploringItem[] = [
  {
    id: "continual-learning",
    topic: "Continual learning & adaptive memory",
    description:
      "Training-free ways for vision models to absorb corrections without forgetting what they already know.",
    status: "Researching",
  },
  {
    id: "assistive-ai",
    topic: "Assistive perception systems",
    description:
      "Local-first pipelines that turn camera input into guidance people can trust in real rooms.",
    status: "Building",
    link: "https://github.com/rajin-khan/AIris",
  },
  {
    id: "grounded-drafting",
    topic: "Grounded document drafting",
    description:
      "Legal and study tools where the model stays tied to source text instead of inventing structure.",
    status: "Building",
    link: "https://github.com/Kabbya04/Gravitas",
  },
  {
    id: "product-craft",
    topic: "Product architecture & interface craft",
    description:
      "How AI features land in interfaces that stay fast, clear, and accessible after the demo ends.",
    status: "Playing",
  },
];
