import { describe, it, expect } from "vitest";
import { map } from "../src/map";

describe("map", () => {
  it("should apply a mapping function to each character", () => {
    // rot13 example
    const rot13 = (r: string): string => {
      const charCode = r.charCodeAt(0);
      if (r >= "a" && r <= "m") return String.fromCharCode(charCode + 13);
      if (r >= "n" && r <= "z") return String.fromCharCode(charCode - 13);
      if (r >= "A" && r <= "M") return String.fromCharCode(charCode + 13);
      if (r >= "N" && r <= "Z") return String.fromCharCode(charCode - 13);
      return r;
    };
    expect(map(rot13, "'Twas brillig and the slithy toves...")).toBe(
      "'Gjnf oevyyvt naq gur fyvgul gbirf...",
    );
  });

  it("should drop characters if the mapping function returns an empty string", () => {
    // Assuming an empty string return value means dropping the character.
    const removeVowels = (r: string): string => {
      return "aeiou".includes(r) ? "" : r;
    };
    expect(map(removeVowels, "hello world")).toBe("hll wrld");
  });

  it("should handle transformations like toUpperCase", () => {
    const toUpper = (r: string): string => r.toUpperCase();
    expect(map(toUpper, "abcDEF")).toBe("ABCDEF");
  });

  it("should return an empty string if the input string is empty", () => {
    const identity = (r: string): string => r;
    expect(map(identity, "")).toBe("");
  });

  it("should return an empty string if all characters are dropped", () => {
    const dropAll = (_r: string): string => "";
    expect(map(dropAll, "any string")).toBe("");
  });

  it("should handle unicode characters", () => {
    const square = (r: string): string => (r === "a" ? "α" : "β");
    expect(map(square, "abacaba")).toBe("αβαβαβα");
  });
});
