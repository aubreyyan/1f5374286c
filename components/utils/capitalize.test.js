import React from 'react';
import capitalize from './capitalize';

test("function exists", () => {
    expect(capitalize).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof capitalize).toBe("function")
});

test("input of empty string should return empty string", () => {
    expect(capitalize("")).toBe("")
});

test("input of null should return empty string", () => {
    expect(capitalize(null)).toBe("");
});

test("input of alphanumeric string starting with number should return same string", () => {
    expect(capitalize("4k3hdn7")).toBe("4k3hdn7");
});

test("input of single lowercase letter should return capitalized letter", () => {
    expect(capitalize("l")).toBe("L");
});

test("input of single uppercase letter should return same string", () => {
    expect(capitalize("P")).toBe("P");
});

test("input of uncapitalized string should return string with first letter capitalized", () => {
    expect(capitalize("string")).toBe("String")
});

test("input of multiple uncapitalized words should return all first letter capitalized", () => {
    expect(capitalize("can someone capitalize me")).toBe("Can Someone Capitalize Me");
});

test("input of multiple uncapitalized words with punctuation should return all first letter capitalized", () => {
    expect(capitalize("so, how is this?")).toBe("So, How Is This?");
});