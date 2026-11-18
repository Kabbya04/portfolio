export type FieldNote = {
  id: string;
  date: string;
  label: string;
  body: string;
  href?: string | null;
};

export const fieldNotesIntro =
  "Short entries from the bench—not polished posts, just what stuck.";

export const fieldNotes: FieldNote[] = [
  {
    id: "guidance-latency",
    date: "2026-10",
    label: "AIris",
    body: "340 ms mean guidance cycle is usable. Anything much slower starts to feel like arguing with the room.",
    href: "/research",
  },
  {
    id: "control-loop",
    date: "2026-09",
    label: "Assistive CV",
    body: "Kept LLMs out of the control loop. YOLO + hand tracking as a state machine was enough for locate-and-grasp.",
    href: "/research",
  },
  {
    id: "box-box-uncertainty",
    date: "2026-09",
    label: "Box-Box",
    body: "Podium calls got more honest once Monte Carlo stopped pretending a single ranking was the answer.",
    href: "/projects/box-box",
  },
  {
    id: "gravitas-grounding",
    date: "2026-08",
    label: "Gravitas",
    body: "Draft quality tracked retrieval fidelity more than prompt cleverness. Unsourced structure is the real failure mode.",
    href: "/projects/gravitas",
  },
  {
    id: "calm-memory",
    date: "2026-07",
    label: "CALM",
    body: "Training-free continual learning is messy. Corrections have to stick without rewriting what already worked.",
    href: "/research",
  },
];
