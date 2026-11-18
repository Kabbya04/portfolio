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

  if (end === start) {
    return startLabel;
  }

  const endParts = parseYearMonth(end);
  const endLabel = endParts.month
    ? `${monthNames[endParts.month - 1]} ${endParts.year}`
    : `${endParts.year}`;

  return `${startLabel} · ${endLabel}`;
};
