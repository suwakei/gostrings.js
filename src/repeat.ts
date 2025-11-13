/**
 * Returns a new string consisting of count copies of the string s.
 * It throws a RangeError if count is negative or if the result of s.length * count would exceed a safe string length.
 * @param s The string to repeat.
 * @param count The number of times to repeat the string. Must be non-negative.
 * @returns A new string with s repeated count times.
 */
export function repeat(s: string, count: number): string {
  if (count < 0) throw new RangeError("negative repeat count");
  if (s.length * count >= 1 << 28)
    throw new RangeError("repeat output too long");
  return s.repeat(count);
}
