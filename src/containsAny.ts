/**
 * Reports whether any character from chars is within s.
 * @param s The string to search within.
 * @param chars A string containing the characters to search for.
 * @returns True if s contains any character from chars, false otherwise.
 */
export function containsAny(s: string, chars: string): boolean {
  if (!chars) return false;
  for (const c of chars) {
    if (s.includes(c)) return true;
  }
  return false;
}
