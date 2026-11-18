import { education, experience, publications, research } from "./profile";
import { formatPeriod } from "./dates";

export type LadderItem = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  start: string;
  kind: "work" | "research" | "publication" | "education" | "project";
  href?: string | null;
};

const publication = publications[0];

const parseStartIndex = (value: string) => {
  const [year, month] = value.split("-");
  const y = Number(year);
  // Year-only dates (publications) sort as mid-year so they sit with their year cohort.
  const m = month ? Number(month) : 6;
  return y * 12 + m;
};

const entries: LadderItem[] = [
  {
    id: research[0].id,
    title: research[0].title,
    subtitle: research[0].subtitle,
    period: formatPeriod(research[0].start, research[0].end),
    start: research[0].start,
    kind: "research",
    href: "/research",
  },
  {
    id: "airis-pub",
    title: publication.title,
    subtitle: publication.venue,
    period: formatPeriod(publication.start, publication.end),
    start: publication.start,
    kind: "publication",
    href: publication.doi,
  },
  {
    id: experience[0].id,
    title: experience[0].title,
    subtitle: experience[0].subtitle,
    period: formatPeriod(experience[0].start, experience[0].end),
    start: experience[0].start,
    kind: "work",
  },
  {
    id: research[1].id,
    title: research[1].title,
    subtitle: research[1].subtitle,
    period: formatPeriod(research[1].start, research[1].end),
    start: research[1].start,
    kind: "research",
    href: "/research",
  },
  {
    id: experience[1].id,
    title: experience[1].title,
    subtitle: experience[1].subtitle,
    period: formatPeriod(experience[1].start, experience[1].end),
    start: experience[1].start,
    kind: "work",
  },
  {
    id: experience[2].id,
    title: experience[2].title,
    subtitle: experience[2].subtitle,
    period: formatPeriod(experience[2].start, experience[2].end),
    start: experience[2].start,
    kind: "work",
  },
  {
    id: education[0].id,
    title: education[0].title,
    subtitle: education[0].subtitle,
    period: formatPeriod(education[0].start, education[0].end),
    start: education[0].start,
    kind: "education",
  },
];

export const ladder = [...entries].sort(
  (a, b) => parseStartIndex(b.start) - parseStartIndex(a.start),
);
