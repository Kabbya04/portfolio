export type Experiment = {
  id: string;
  code: string;
  title: string;
  category: string;
  period: string;
  status: "Experimenting" | "Paused" | "Documented" | "Active";
  summary: string;
  notes?: string;
  link?: string | null;
};

export const experiments: Experiment[] = [
  {
    id: "airis-control-loop",
    code: "EXP-001",
    title: "AIris as interaction controller",
    category: "Assistive Vision",
    period: "2025-2026",
    status: "Documented",
    summary:
      "Instead of chasing a new perception model, AIris treats guidance as a deterministic state machine over YOLO detections and MediaPipe hand tracking. The interesting bit was keeping LLMs outside the control loop.",
    notes:
      "Published in SN Computer Science. Blindfolded locate-and-grasp trials hit 90%. Mean guidance-cycle latency landed at 340 ms.",
    link: "https://doi.org/10.1007/s42979-026-05445-z",
  },
  {
    id: "calm",
    code: "EXP-002",
    title: "CALM: Correction-Aware Latent Memory",
    category: "Continual Learning",
    period: "2025",
    status: "Active",
    summary:
      "A training-free continual learning setup that stores human corrections as embedding-label supports and updates class prototypes without gradient updates. Paired with a frozen CLIP encoder and a readiness agent that decides whether to deploy or defer.",
    notes:
      "CALM-v1 reached 96.88% few-shot accuracy and -5.52% BWT on ImageNet-aligned protocols. CALM-v2 explores multi-encoder disagreement scoring and hierarchical episodic memory.",
  },
  {
    id: "ciasl",
    code: "EXP-003",
    title: "Intelligent security systems notebook",
    category: "Research Lab",
    period: "2026",
    status: "Experimenting",
    summary:
      "Research assistant work at NSU CIASL on intelligent security systems under lab supervision. Supporting experimental design, literature review, implementation, and documentation for an ongoing project.",
  },
  {
    id: "box-box-uncertainty",
    code: "EXP-004",
    title: "Podium probability surfaces",
    category: "Sports Analytics",
    period: "2026",
    status: "Experimenting",
    summary:
      "Monte Carlo sampling over XGBoost race predictions so a podium call is a distribution, not a single confident wrong answer. SHAP helps explain why the model leaned one way.",
    link: "https://box-box-predict.vercel.app/",
  },
  {
    id: "recsys-taste",
    code: "EXP-005",
    title: "Taste without overconfident ranking",
    category: "Recommendations",
    period: "2025",
    status: "Paused",
    summary:
      "Zappy and Omni were two angles on the same itch: recommendations that feel personal without pretending the model knows you. One path used classical TF-IDF, the other leaned on LLMs plus fresh metadata.",
    link: "https://zappy-theta.vercel.app/",
  },
];
