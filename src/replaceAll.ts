/**
 * Returns a copy of the string s with all non-overlapping
 * instances of oldStr replaced by newStr.
 * If oldStr is an empty string, the new string is inserted between each UTF-16 code unit of the string.
 * This behavior is consistent with `s.split('').join(newStr)`.
 * @param s The original string.
 * @param oldStr The substring to be replaced.
 * @param newStr The new substring to replace with.
 * @returns The modified string.
 */
export function replaceAll(s: string, oldStr: string, newStr: string): string {
  return s.split(oldStr).join(newStr);
}
