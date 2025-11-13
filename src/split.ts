/**
 * Slices s into all substrings separated by sep and returns an array of the substrings between those separators.
 * This is an alias for `String.prototype.split`.
 * @param s The string to split.
 * @param sep The separator.
 * @returns An array of substrings.
 */
export function split(s: string, sep: string): string[] {
  return s.split(sep);
}
