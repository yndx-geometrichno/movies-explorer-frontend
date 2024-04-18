export function normalizeDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  if (hours >= 1) {
    return `${hours}ч ${minutes}м`;
  } else return `${minutes}м`;
}
