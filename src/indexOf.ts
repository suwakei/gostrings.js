/**
 * Returns the index of the first instance of substr in s, or -1 if substr is not present in s.
 * This is an alias for `String.prototype.indexOf`.
 * @param s The string to search in.
 * @param substr The substring to search for.
 * @returns The index of the first occurrence, or -1.
 */
export function indexOf(s: string, substr: string): number {
  return s.indexOf(substr);
}
