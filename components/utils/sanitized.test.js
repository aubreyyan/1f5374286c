import React from 'react';
import sanitized from './sanitized';

test("function exists", () => {
    expect(sanitized).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof sanitized).toBe("function");
});

test("input of empty string should return empty string", () => {
    expect(sanitized("")).toBe("");
});

test("input of null should return empty string", () => {
    expect(sanitized(null)).toBe("");
});

test("input of regular string should return same string", () => {
    expect(sanitized("This is a normal string.")).toBe("This is a normal string.")
});

test("input of html should return non html response", () => {
    expect(sanitized("<html><p>hi</p></html>")).toBe("hi");
});