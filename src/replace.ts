/**
 * Returns a copy of the string s with the first n non-overlapping instances of oldStr replaced by newStr.
 * If oldStr is empty, it returns s unchanged.
 * If n < 0, there is no limit on the number of replacements.
 * @param s The original string.
 * @param oldStr The substring to be replaced.
 * @param newStr The new substring to replace with.
 * @param n The maximum number of replacements.
 * @returns The modified string.
 */
export function replace(
  s: string,
  oldStr: string,
  newStr: string,
  n: number,
): string {
  if (oldStr === "" || n === 0) {
    return s;
  }

  if (n < 0) {
    return s.split(oldStr).join(newStr);
  }

  const parts: string[] = [];
  let lastIndex = 0;
  for (let i = 0; i < n; i++) {
    const idx = s.indexOf(oldStr, lastIndex);
    if (idx === -1) {
      break;
    }
    parts.push(s.substring(lastIndex, idx));
    parts.push(newStr);
    lastIndex = idx + oldStr.length;
  }
  parts.push(s.substring(lastIndex));

  return parts.join("");
}
