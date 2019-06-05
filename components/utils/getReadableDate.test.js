import React from 'react';
import getReadableDate from './getReadableDate';

test("function exists", () => {
    expect(getReadableDate).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof getReadableDate).toBe("function");
});

test("input of empty string should return null", () => {
    expect(getReadableDate("")).toBeNull();
});

test("input of null should return null", () => {
    expect(getReadableDate(null)).toBeNull();
});

test("input of Date(2019-01-01) should return Tuesday, January 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 0, 1))).toBe("Tuesday, January 1, 2019");
});

test("input of Date(2019-02-01) should return Friday, February 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 1, 1))).toBe("Friday, February 1, 2019");
});

test("input of Date(2019-03-02 should return Saturday, March 2, 2019", () => {
    expect(getReadableDate(new Date(2019, 2, 2))).toBe("Saturday, March 2, 2019");
});

test("input of Date(2019-04-07 should return Sunday, April 7, 2019", () => {
    expect(getReadableDate(new Date(2019, 3, 7))).toBe("Sunday, April 7, 2019");
});

test("input of Date(2019-05-06 should return Monday, May 6, 2019", () => {
    expect(getReadableDate(new Date(2019, 4, 6))).toBe("Monday, May 6, 2019");
});

test("input of Date(2019-06-04) should return Tuesday, June 4, 2019", () => {
    expect(getReadableDate(new Date(2019, 5, 4))).toBe("Tuesday, June 4, 2019");
});

test("input of Date(2019-07-03) should return Wednesday, July 3, 2019", () => {
    expect(getReadableDate(new Date(2019, 6, 3))).toBe("Wednesday, July 3, 2019");
});

test("input of Date(2019-08-01) should return Thursday, August 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 7, 1))).toBe("Thursday, August 1, 2019");
});

test("input of Date(2019-09-01) should return Sunday, September 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 8, 1))).toBe("Sunday, September 1, 2019");
});

test("input of Date(2019-10-01) should return Tuesday, October 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 9, 1))).toBe("Tuesday, October 1, 2019");
});

test("input of Date(2019-11-01) should return Friday, November 1, 2019", () => {
    expect(getReadableDate(new Date(2019, 10, 1))).toBe("Friday, November 1, 2019");
});

test("input of Date(2019-12-01) should return Sunday, December 1, 2019", () =>{
    expect(getReadableDate(new Date(2019, 11, 1))).toBe("Sunday, December 1, 2019");
});