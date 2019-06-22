import React from 'react';
import parseDate from './parseDate';

test("function exists", () => {
    expect(parseDate).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof parseDate).toBe("function");
});

test("input of null should return null", () => {
    expect(parseDate(null)).toBeNull();
});

test("input of empty string should return null", () => {
    expect(parseDate("")).toBeNull();
});

test("input of standard date YYYY-MM-DD should return valid date", () => {
    expect(parseDate("2000-01-01")).toStrictEqual(new Date(2000, 0, 1));
});

test("input of foreign api formatted date should return valid date", () => {
    expect(parseDate("{ts '2015-12-25 00:00:00'}")).toStrictEqual(new Date(2015, 11, 25));
});

test("input of other date formats should return null", () => {
    expect(parseDate("12-25-2015 00:00:00")).toBeNull();
});