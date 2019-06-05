import React from 'react';
import getReadablePhone from './getReadablePhone';

test("function exists", () => {
    expect(getReadablePhone).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof getReadablePhone).toBe("function");
});

test("input of empty string should return empty string", () => {
    expect(getReadablePhone("")).toBe("");
});

test("input of null should return empty string", () => {
    expect(getReadablePhone(null)).toBe("");
});

test("input of correctly formatted string should return same string", () => {
    expect(getReadablePhone("123-456-7890")).toBe("123-456-7890");
});

test("input of incorrectly formatted string should return formatted string", () => {
    expect(getReadablePhone("1234567890")).toBe("123-456-7890");
});