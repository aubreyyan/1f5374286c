import React from 'react';
import toDate from './convertStringToDate';

test("function exists", () => {
    expect(toDate).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof toDate).toBe("function");
});

test("input of empty string should return null", () => {
    expect(toDate("")).toBeNull();
});

test("input of null should return null", () => {
    expect(toDate(null)).toBeNull();
});

test("input of space delimited numbers should return null", () => {
    expect(toDate("03 12 2000")).toBeNull();
});

test("input of unformatted letters should return null", () => {
    expect(toDate("random string")).toBeNull();
});

test("input of formatted letters should return null", () => {
    expect(toDate("aa-bb-cccc")).toBeNull();
});

test("input of incorrectly formatted date should return null", () => {
    expect(toDate("02-03-2019")).toBeNull();
});

test("input of correctly formatted date should return valid date object", () => {
    expect(toDate("1999-01-31")).toEqual(new Date(1999, 0, 31));
});

test("input of decimals should return null", () => {
    expect(toDate("5.22-6.0-2010.")).toBeNull();
});

test("input of numbers should return null", () => {
    expect(toDate(24)).toBeNull();
});