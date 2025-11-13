/**
 * Concatenates the elements of its first argument to create a single string. The separator
 * string sep is placed between elements in the resulting string.
 * @param elems The array of strings to join.
 * @param sep The separator to use between elements.
 * @returns The joined string.
 */
export function join(elems: string[], sep: string): string {
  return elems.join(sep);
}
