/**
 * Slices s into substrings separated by sep and returns an array of the substrings between those separators.
 * The count n determines the number of substrings to return.
 * n > 0: at most n substrings; the last substring will be the unsplit remainder.
 * n == 0: the result is an empty array.
 * n < 0: all substrings are returned.
 * @param s The string to be split.
 * @param sep The separator.
 * @param n The number of substrings to return.
 */
export function splitN(s: string, sep: string, n: number): string[] {
  if (n === 0) {
    return [];
  }

  if (n < 0) {
    return s.split(sep);
  }

  if (n === 1) {
    return [s];
  }

  // Special case for empty separator, matching Go's behavior.
  if (sep === "") {
    const result: string[] = [];
    for (let i = 0; i < n - 1 && i < s.length; i++) {
      result.push(s[i]);
    }
    result.push(s.substring(Math.min(n - 1, s.length)));
    return result;
  }

  const result: string[] = [];
  let lastIndex = 0;
  for (let i = 1; i < n; i++) {
    const idx = s.indexOf(sep, lastIndex);
    if (idx === -1) {
      result.push(s.substring(lastIndex));
      return result;
    }
    result.push(s.substring(lastIndex, idx));
    lastIndex = idx + sep.length;
  }
  result.push(s.substring(lastIndex));

  return result;
}
