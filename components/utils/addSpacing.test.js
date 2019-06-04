import React from 'react';
import addSpacing from './addSpacing';

test("function exists", () => {
    expect(addSpacing).not.toBeNull();
});

test("object is function", () => {
    expect(typeof addSpacing).toBe("function");
});

test("input of empty string should return empty string", () => {
    expect(addSpacing("")).toBe("");
});

test("input of null should return empty string", () => {
    expect(addSpacing(null)).toBe("");
});

test("input of single state should return same string", () => {
    expect(addSpacing("IA")).toBe("IA");
});

test("input of single state with spaces should return same string", () => {
    expect(addSpacing("   CA")).toBe("   CA");
});

test("input of single state with comma should return additional space", () => {
    expect(addSpacing("CA,")).toBe("CA, ");
});

test("input of multiple states with commas should return additional spaces", () => {
    expect(addSpacing("AK,OH,HI")).toBe("AK, OH, HI");
});