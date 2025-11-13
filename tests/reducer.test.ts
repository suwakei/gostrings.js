import { describe, it, expect } from "vitest";
import { Reducer } from "../src/index.js"; // ファイルパスは環境に応じて調整

describe("Reducer", () => {
  it("should return a function that maps string to string", () => {
    const upper: Reducer = Reducer((s) => s.toUpperCase());

    expect(typeof upper).toBe("function");
    expect(upper("hello")).toBe("HELLO");
    expect(upper("world")).toBe("WORLD");
  });

  it("should preserve identity when using Reducer as wrapper", () => {
    const fn = (s: string) => s + "!";
    const wrapped: Reducer = Reducer(fn);

    expect(wrapped("test")).toBe("test!");
    expect(wrapped("abc")).toBe("abc!");
  });

  it("should allow chaining multiple Reducers manually", () => {
    const addExclaim: Reducer = Reducer((s) => s + "!");
    const toUpper: Reducer = Reducer((s) => s.toUpperCase());

    const combined: Reducer = Reducer((s) => toUpper(addExclaim(s)));

    expect(combined("hello")).toBe("HELLO!");
    expect(combined("world")).toBe("WORLD!");
  });
});
