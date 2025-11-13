import { splitAfter } from "./splitAfter.js";


/**
 * Slices s into substrings after each instance of sep and returns an array of those substrings.
 * The count n determines the number of substrings to return.
 * n > 0: at most n substrings; the last substring will be the unsplit remainder.
 * n == 0: the result is an empty array.
 * @param s The string to be split.
 * @param sep The separator.
 * @param n The number of substrings to return.
 */
export function splitAfterN(s: string, sep: string, n: number): string[] {
    const parts = splitAfter(s, sep);
    if (n === 0) return [];
    if (n > 0 && parts.length > n) {
      return [...parts.slice(0, n - 1), parts.slice(n - 1).join("")];
    }
    return parts;
  }
