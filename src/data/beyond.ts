export type BeyondItem = {
  id: string;
  title: string;
  kicker: string;
  body: string;
};

export const beyondIntro =
  "Outside the repos, these are the habits that keep me sharp—pitch, playlist, and craft alike.";

export const beyond: BeyondItem[] = [
  {
    id: "football",
    title: "Football, weekly",
    kicker: "Football",
    body: "I watch the game for movement and timing, then play once a week with friends. Same pitch, fewer cameras—just the next pass, a cramped midfield, and the reset that comes after ninety muddy minutes.",
  },
  {
    id: "guitars",
    title: "Electric guitars and craft",
    kicker: "Music",
    body: "Neck profiles, hardware, and the stubborn details that decide whether a guitar disappears into a song or fights you the whole way.",
  },
  {
    id: "gaming",
    title: "Systems you can lose an evening to",
    kicker: "Gaming",
    body: "Late-night Dhaka, headphones on. I like games that reward reading a system: pacing, co-op, the quiet satisfaction of figuring out why something clicked.",
  },
  {
    id: "sound",
    title: "Sound as a working companion",
    kicker: "Listening",
    body: "Playlists pace long builds. The right track keeps debugging from turning into noise.",
  },
  {
    id: "design",
    title: "Visual and product design",
    kicker: "Form",
    body: "Typography, spacing, and restraint usually beat another feature.",
  },
  {
    id: "making",
    title: "Things outside demos",
    kicker: "Making",
    body: "Hardware scraps and half-finished tools. Some ideas only make sense months later.",
  },
];
