/**
 * Reports whether the string s ends with suffix.
 * @param s The string to check.
 * @param suffix The suffix to check for.
 * @returns True if s ends with suffix, false otherwise.
 */
export function hasSuffix(s: string, suffix: string): boolean {
  if (suffix.length > s.length) return false;
  return s.endsWith(suffix);
}
