import React from 'react';
import getTimeRange from './getTimeRange';

test("function exists", () => {
    expect(getTimeRange).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof getTimeRange).toBe("function");
});

test("input of empty strings should return empty string", () => {
    expect(getTimeRange("", "")).toBe("");
});

test("input of time and empty string should return time", () => {
    expect(getTimeRange("5:00 PM", "")).toBe("5:00 PM");
});

test("input of time and null should return time", () => {
    expect(getTimeRange("6:00 AM", null)).toBe("6:00 AM");
});

test("input of empty string and time should return ends syntax", () => {
    expect(getTimeRange("", "11:00 PM")).toBe("Ends at 11:00 PM");
});

test("input of null and time should return ends syntax", () => {
    expect(getTimeRange(null, "4:00 AM")).toBe("Ends at 4:00 AM");
});

test("input of times should return both times syntax", () => {
    expect(getTimeRange("4:00 PM", "5:00 PM")).toBe("4:00 PM - 5:00 PM");
});