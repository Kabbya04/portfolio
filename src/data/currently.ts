export type CurrentlySlot = {
  id: string;
  kind: "Reading" | "Listening" | "Watching" | "Playing";
  title: string;
  note: string;
  href?: string | null;
};

export const currentlyIntro =
  "What is in rotation while the builds and papers move.";

export const currently: CurrentlySlot[] = [
  {
    id: "reading-continual",
    kind: "Reading",
    title: "Continual learning surveys",
    note: "Training-free adaptation notes for CALM—what survives a correction without catastrophic forgetting.",
    href: "/research",
  },
  {
    id: "listening-builds",
    kind: "Listening",
    title: "Build-night playlist",
    note: "Same Spotify shelf that paces long debugging sessions on Contact.",
    href: "/contact",
  },
  {
    id: "watching-matchdays",
    kind: "Watching",
    title: "Football + race weekends",
    note: "Matchdays for the shape of a game; F1 weekends when Box-Box needs another look at uncertainty under pressure.",
    href: "/beyond",
  },
  {
    id: "playing-football-gaming",
    kind: "Playing",
    title: "Football + games that reward systems",
    note: "Weekly football with friends, then evenings in games that reward reading a system—pacing, co-op, the click when a loop finally makes sense.",
    href: "/beyond",
  },
];
