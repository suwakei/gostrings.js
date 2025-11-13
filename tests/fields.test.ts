import { describe, it, expect } from "vitest";
import { fields } from "../src/fields";

describe("fields", () => {
  it("should split a string by one or more consecutive white space characters", () => {
    expect(fields("  foo bar  baz   ")).toEqual(["foo", "bar", "baz"]);
  });

  it("should handle various kinds of whitespace", () => {
    expect(fields("foo\tbar\nbaz")).toEqual(["foo", "bar", "baz"]);
  });

  it("should return an empty array for a string with only whitespace", () => {
    expect(fields(" \t\n ")).toEqual([]);
  });

  it("should return an empty array for an empty string", () => {
    expect(fields("")).toEqual([]);
  });

  it("should return an array with the string itself if it contains no whitespace", () => {
    expect(fields("foobarbaz")).toEqual(["foobarbaz"]);
  });

  it("should handle a mix of spaces and tabs", () => {
    expect(fields(" one \t two \t\t three ")).toEqual(["one", "two", "three"]);
  });
});
