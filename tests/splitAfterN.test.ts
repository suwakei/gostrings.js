import { describe, it, expect } from "vitest";
import { splitAfterN } from "../src/splitAfterN";

describe("splitAfterN", () => {
  it("should split into at most n substrings, with the last substring being the unsplit remainder", () => {
    expect(splitAfterN("a,b,c", ",", 2)).toEqual(["a,", "b,c"]);
  });

  it("should return all substrings if n is negative", () => {
    expect(splitAfterN("a,b,c", ",", -1)).toEqual(["a,", "b,", "c"]);
  });

  it("should return an empty slice if n is 0", () => {
    expect(splitAfterN("a,b,c", ",", 0)).toEqual([]);
  });

  it("should return a slice with the original string if n is 1", () => {
    expect(splitAfterN("a,b,c", ",", 1)).toEqual(["a,b,c"]);
  });

  it("should return all substrings if n is larger than the number of separators", () => {
    expect(splitAfterN("a,b,c", ",", 5)).toEqual(["a,", "b,", "c"]);
  });

  it("should return a slice with the original string if the separator is not found", () => {
    expect(splitAfterN("abc", "-", 2)).toEqual(["abc"]);
  });

  it("should handle an empty string", () => {
    expect(splitAfterN("", ",", 2)).toEqual([""]);
  });

  it("should handle an empty separator", () => {
    expect(splitAfterN("abc", "", 2)).toEqual(["a", "bc"]);
    expect(splitAfterN("abc", "", -1)).toEqual(["a", "b", "c"]);
    expect(splitAfterN("abc", "", 1)).toEqual(["abc"]);
  });

  it("should handle leading and trailing separators", () => {
    expect(splitAfterN(",a,b,", ",", 2)).toEqual([",", "a,b,"]);
    expect(splitAfterN(",a,b,", ",", 3)).toEqual([",", "a,", "b,"]);
    expect(splitAfterN(",a,b,", ",", -1)).toEqual([",", "a,", "b,"]);
  });
});
