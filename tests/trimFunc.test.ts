import { describe, it, expect } from "vitest";
import { trimFunc } from "../src/trimFunc";

describe("trimFunc", () => {
  it("should remove leading and trailing characters satisfying the function", () => {
    const isExclamation = (c: string) => c === "!" || c === "¡";
    expect(trimFunc("¡¡¡Hello, Gophers!!!", isExclamation)).toBe(
      "Hello, Gophers",
    );
  });

  it("should not remove characters from the middle of the string", () => {
    const isDot = (c: string) => c === ".";
    expect(trimFunc("h.e.l.l.o", isDot)).toBe("h.e.l.l.o");
  });

  it("should return an empty string if the entire string satisfies the function", () => {
    const isNumber = (c: string) => c >= "0" && c <= "9";
    expect(trimFunc("123123123", isNumber)).toBe("");
  });

  it("should return the original string if no characters at the ends satisfy the function", () => {
    const isVowel = (c: string) => "aeiou".includes(c);
    expect(trimFunc("rhythm", isVowel)).toBe("rhythm");
  });

  it("should return an empty string for an empty input string", () => {
    const alwaysTrue = (_c: string) => true;
    expect(trimFunc("", alwaysTrue)).toBe("");
  });

  it("should remove only leading characters if only they satisfy the function", () => {
    const isDot = (c: string) => c === ".";
    expect(trimFunc("...hello", isDot)).toBe("hello");
  });

  it("should remove only trailing characters if only they satisfy the function", () => {
    const isDot = (c: string) => c === ".";
    expect(trimFunc("hello...", isDot)).toBe("hello");
  });
});
