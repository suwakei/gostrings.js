/**
 * Returns the index of the last instance of substr in s, or -1 if substr is not present in s.
 * This is an alias for `String.prototype.lastIndexOf`.
 * @param s The string to search in.
 * @param substr The substring to search for.
 * @returns The index of the last occurrence, or -1.
 */
export function lastIndexOf(s: string, substr: string): number {
  return s.lastIndexOf(substr);
}
