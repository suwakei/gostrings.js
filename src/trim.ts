/**
 * Returns a slice of the string s with all leading and trailing
 * characters contained in cutset removed.
 * If cutset is not provided, it removes whitespace.
 * @param s The string to trim.
 * @param cutset A string containing characters to remove.
 * @returns The trimmed string.
 */
export function trim(s: string, cutset?: string): string {
  if (!cutset) return s.trim();
  const pattern = new RegExp(`^[${cutset}]+|[${cutset}]+$`, "g");
  return s.replace(pattern, "");
}
