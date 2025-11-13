/**
 * Returns a slice of the string s with all leading and trailing
 * characters c satisfying fn(c) removed.
 * @param s The string to trim.
 * @param fn A function that returns true if a character should be trimmed.
 * @returns The trimmed string.
 */
export function trimFunc(s: string, fn: (r: string) => boolean): string {
  let start = 0,
    end = s.length;
  while (start < end && fn(s[start])) start++;
  while (end > start && fn(s[end - 1])) end--;
  return s.slice(start, end);
}
