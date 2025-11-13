/**
 * Compare returns an integer comparing two strings lexicographically.
 * The result will be 0 if a==b, -1 if a < b, and +1 if a > b.
 * @param a The first string.
 * @param b The second string.
 * @returns 0 if a==b, -1 if a < b, and +1 if a > b.
 */
export function compare(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}
