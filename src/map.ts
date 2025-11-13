/**
 * Returns a copy of the string s with all its characters modified
 * according to the mapping function. If the mapping function returns
 * undefined or null for a character, the character is dropped from the string.
 * @param mapping A function that takes a character and returns a mapped character.
 * @param s The input string.
 * @returns A new string with mapped characters.
 */
export function map(mapping: (r: string) => string, s: string): string {
  let result = "";
  for (const c of s) {
    const mapped = mapping(c);
    if (mapped !== undefined && mapped !== null) result += mapped;
  }
  return result;
}
