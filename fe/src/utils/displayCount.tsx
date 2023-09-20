export default function displayCount(count: number): string {
  if (count <= 0) return '';
  return count > 99 ? '99+' : count.toString();
}
