import { describe, it, expect } from "vitest";
import { splitN } from "../src/splitN";

describe("splitN", () => {
  it("should split into at most n substrings, with the last substring being the unsplit remainder", () => {
    expect(splitN("a,b,c", ",", 2)).toEqual(["a", "b,c"]);
  });

  it("should return all substrings if n is negative", () => {
    expect(splitN("a,b,c", ",", -1)).toEqual(["a", "b", "c"]);
  });

  it("should return an empty slice if n is 0", () => {
    expect(splitN("a,b,c", ",", 0)).toEqual([]);
  });

  it("should return a slice with the original string if n is 1", () => {
    expect(splitN("a,b,c", ",", 1)).toEqual(["a,b,c"]);
  });

  it("should return all substrings if n is larger than the number of separators + 1", () => {
    expect(splitN("a,b,c", ",", 5)).toEqual(["a", "b", "c"]);
  });

  it("should return a slice with the original string if the separator is not found", () => {
    expect(splitN("abc", "-", 2)).toEqual(["abc"]);
  });

  it("should handle an empty string", () => {
    expect(splitN("", ",", 2)).toEqual([""]);
  });

  it("should handle an empty separator", () => {
    expect(splitN("abc", "", 2)).toEqual(["a", "bc"]);
    expect(splitN("abc", "", -1)).toEqual(["a", "b", "c"]);
    expect(splitN("abc", "", 1)).toEqual(["abc"]);
  });

  it("should handle leading and trailing separators", () => {
    expect(splitN(",a,b,", ",", 2)).toEqual(["", "a,b,"]);
    expect(splitN(",a,b,", ",", 3)).toEqual(["", "a", "b,"]);
    expect(splitN(",a,b,", ",", -1)).toEqual(["", "a", "b", ""]);
  });
});
