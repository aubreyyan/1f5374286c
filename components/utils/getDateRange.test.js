import React from 'react';
import getDateRange from './getDateRange';

test("function exists", () => {
    expect(getDateRange).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof getDateRange).toBe("function");
});

test("input of empty strings should return empty string", () => {
    expect(getDateRange("", "")).toBe("");
});

test("input of null should return empty string", () => {
    expect(getDateRange(null, null)).toBe("");
});

test("input of invalid string and null should return empty string", () => {
    expect(getDateRange("invalid", null)).toBe("");
});

test("input of valid string and null should return valid date", () => {
    expect(getDateRange("2019-06-04", null)).toBe("Tuesday, June 4, 2019");
});

test("input of null and valid string should return Ends", () => {
    expect(getDateRange(null, "2019-06-04")).toBe("Ends Tuesday, June 4, 2019");
});

test("input of valid dates should return valid response", () => {
    expect(getDateRange("2019-06-02", "2019-06-04")).toBe("Sunday, June 2, 2019 - Tuesday, June 4, 2019");
});

test("input of invalid date combination should return empty string", () => {
    expect(getDateRange("2019-05-23", "2000-01-02")).toBe("");
});