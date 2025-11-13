/**
 * Splits the string s at each run of characters satisfying fn(c) and returns an array of slices of s.
 * @param s The string to split.
 * @param fn A function that returns true if a character is a separator.
 * @returns An array of substrings.
 */
export function fieldsFunc(s: string, fn: (r: string) => boolean): string[] {
  const result: string[] = [];
  let current = "";
  for (const ch of s) {
    if (fn(ch)) {
      if (current) {
        result.push(current);
        current = "";
      }
    } else {
      current += ch;
    }
  }
  if (current) result.push(current);
  return result;
}
