import { describe, it, expect } from "vitest";
import { Replacer } from "../src/index.js";

describe("Replacer", () => {
  it("should throw an error for an odd number of arguments", () => {
    expect(() => new Replacer("a")).toThrow(
      "Replacer: odd number of arguments",
    );
  });

  it("should perform basic replacements", () => {
    const r = new Replacer("a", "b", "c", "d");
    expect(r.replace("ace")).toBe("bde");
  });

  it("should handle no matching replacements", () => {
    const r = new Replacer("a", "b");
    expect(r.replace("xyz")).toBe("xyz");
  });

  it("should handle an empty input string", () => {
    const r = new Replacer("a", "b");
    expect(r.replace("")).toBe("");
  });

  it("should handle replacements that result in an empty string", () => {
    const r = new Replacer("delete", "");
    expect(r.replace("start delete end")).toBe("start  end");
  });

  it("should not re-scan the replaced string", () => {
    const r = new Replacer("a", "b", "b", "c");
    // "a" -> "b", but the new "b" should not be replaced by "c"
    expect(r.replace("a")).toBe("b");
  });

  it("should prioritize the longest match", () => {
    const r = new Replacer("ab", "X", "abc", "Y");
    expect(r.replace("abcd")).toBe("Yd");
  });

  it("should handle multiple, non-overlapping matches", () => {
    const r = new Replacer("foo", "bar", "baz", "qux");
    expect(r.replace("foo and baz")).toBe("bar and qux");
  });

  it("should handle complex overlapping and sequential matches", () => {
    const r = new Replacer("a", "A", "b", "B", "ab", "AB");
    // Should match "ab" first (longest match), then "a", then "b"
    expect(r.replace("ab a b")).toBe("AB A B");
  });

  it("should ignore empty string as a key", () => {
    const r = new Replacer("", "x");
    expect(r.replace("abc")).toBe("abc");
  });

  it("should handle unicode characters", () => {
    const r = new Replacer("α", "alpha", "β", "beta");
    expect(r.replace("α and β")).toBe("alpha and beta");
  });

  it("should work correctly with a more complex example", () => {
    const r = new Replacer("o", "a", "oo", "ee", "ooo", "ooo");
    expect(r.replace("ooooh ooh oo")).toBe("oooah eeh ee");
  });
});
