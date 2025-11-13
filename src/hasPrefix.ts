/**
 * Reports whether the string s begins with prefix.
 * @param s The string to check.
 * @param prefix The prefix to check for.
 * @returns True if s starts with prefix, false otherwise.
 */
export function hasPrefix(s: string, prefix: string): boolean {
  if (prefix.length > s.length) return false;
  return s.startsWith(prefix);
}
