/**
 * A function that maps a string to another string.
 */
export type Reducer = (s: string) => string;

/**
 * Reducer returns a Reducer that applies f to the input string.
 * In TypeScript, this is an identity function for type-casting,
 * mirroring Go's `strings.Reducer(f)`.
 */
export function Reducer(f: Reducer): Reducer {
  return f;
}
