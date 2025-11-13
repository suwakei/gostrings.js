export function trimSuffix(s: string, suffix: string): string {
  if (suffix === "") return s;
  return s.endsWith(suffix) ? s.slice(0, s.length - suffix.length) : s;
}
