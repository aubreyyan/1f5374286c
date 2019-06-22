import React from 'react';
import JSONtoString from './JSONtoString';

test("object exists", () => {
    expect(JSONtoString).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof JSONtoString).toBe("function");
});

test("input of null should return empty string", () => {
    expect(JSONtoString(null)).toBe("");
});

test("input of empty json should return empty string", () => {
    let empty = {};
    expect(JSONtoString(empty)).toBe("");
});

test("input of single attribute object should return valid string", () => {
    let one = {attr: "value"};
    expect(JSONtoString(one)).toBe("attr value");
});

test("input of multiple attribute object should return valid string", () => {
    let two = {
        first: "one",
        second: "two"
    };
    expect(JSONtoString(two)).toBe("first one second two")
});