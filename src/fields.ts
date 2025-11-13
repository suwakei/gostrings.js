/**
 * Splits the string s around each instance of one or more consecutive white space characters.
 * @param s The string to split.
 * @returns An array of substrings. If s is an empty string or contains only white space, it returns an empty array.
 */
export function fields(s: string): string[] {
  return s.trim().split(/\s+/).filter(Boolean);
}
