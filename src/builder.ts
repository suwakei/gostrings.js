/**
 * StringsBuilder is used to efficiently build a string.
 * It's a TypeScript implementation inspired by Go's `strings.Builder`.
 */
export class StringsBuilder {
  private buf = "";
  private length = 0;

  /**
   * writeString appends the contents of s to the builder's buffer.
   * @param s The string to append.
   */
  writeString(s: string): void {
    this.buf += s;
    this.length += s.length;
  }

  /**
   * writeRune appends the string representation of the rune to the builder's buffer.
   * In this implementation, a rune is treated as a single-character string.
   * @param r The rune (as a string) to append.
   */
  writeRune(r: string): void {
    this.buf += r;
    this.length += 1;
  }

  /**
   * String returns the accumulated string.
   * @returns The built string.
   */
  String(): string {
    return this.buf;
  }

  /**
   * len returns the number of accumulated characters.
   * @returns The length of the built string.
   */
  len(): number {
    return this.length;
  }

  /**
   * reset resets the builder to be empty.
   */
  reset(): void {
    this.buf = "";
    this.length = 0;
  }
}
