/**
 * Slices s into all substrings after each instance of sep and
 * returns an array of those substrings.
 * @param s The string to be split.
 * @param sep The separator.
 * @returns An array of substrings.
 */
export function splitAfter(s: string, sep: string): string[] {
  if (sep === "") {
    return s.split("");
  }
  if (s === "") {
    return [""];
  }

  const parts = s.split(sep);
  const result = parts.slice(0, -1).map((p) => p + sep);

  const lastPart = parts[parts.length - 1];
  // Add the last part only if it's not an empty string resulting from a trailing separator,
  // or if the original string was empty.
  if (lastPart !== "" || s === "") {
    result.push(lastPart);
  }

  return result;
}
