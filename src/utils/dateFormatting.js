export default function dateFormatting(date) {
  const normalizeDate = new Date(date);
  return normalizeDate.toLocaleDateString("uk-UA");
}
