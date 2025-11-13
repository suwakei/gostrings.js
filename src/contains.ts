/**
 * Reports whether substr is within s.
 * An empty substring is considered to be contained in any string.
 * @param s The string to search within.
 * @param substr The substring to search for.
 * @returns True if substr is within s, false otherwise.
 */
export function contains(s: string, substr: string): boolean {
  if (substr === "") return true;
  return s.indexOf(substr) !== -1;
}
