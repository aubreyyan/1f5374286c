import React from 'react';
import JSONtoArray from './JSONtoArray';

test("function exists", () => {
    expect(JSONtoArray).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof JSONtoArray).toBe("function");
});

test("input of empty object should return empty array", () => {
    let empty = {};
    expect(JSONtoArray(empty)).toStrictEqual([]);
});

test("input of null should return empty array", () => {
    expect(JSONtoArray(null)).toStrictEqual([]);
});

test("input of single attribute object should return valid array", () => {
    let one = {attr: "value"};
    expect(JSONtoArray(one)).toStrictEqual([["attr", "value"]])
});

test("input of multiple attribute object should return valid array", () => {
    let two = {
        first: "one",
        second: "two"
    };
    expect(JSONtoArray(two)).toStrictEqual([["first", "one"], ["second", "two"]]);
});