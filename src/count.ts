/**
 * Counts the number of non-overlapping instances of substr in s.
 * If substr is an empty string, it returns the number of characters in s plus one.
 * @param s The string to search within.
 * @param substr The substring to count.
 * @returns The number of non-overlapping instances of substr in s.
 */
export function count(s: string, substr: string): number {
  if (substr === "") {
    return s.length + 1;
  }
  if (substr.length > s.length) {
    return 0;
  }

  let count = 0;
  let i = 0;
  while (true) {
    const idx = s.indexOf(substr, i);
    if (idx === -1) break;
    count++;
    i = idx + substr.length;
  }
  return count;
}
