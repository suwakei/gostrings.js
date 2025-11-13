/**
 * Reports whether s and t, interpreted as UTF-8 strings,
 * are equal under Unicode case-folding, which is a more general form of case-insensitivity.
 * @param s The first string.
 * @param t The second string.
 * @returns True if the strings are equal under case-folding, false otherwise.
 */
export function equalFold(s: string, t: string): boolean {
  return s.toLocaleLowerCase() === t.toLocaleLowerCase();
}
