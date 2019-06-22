import React from 'react';
import StringToJSON from './StringToJSON';

test("object exists", () => {
    expect(StringToJSON).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof StringToJSON).toBe("function");
});

test("input of null should return empty json", () => {
    expect(StringToJSON(null)).toStrictEqual({});
});

test("input of empty string should return empty json", () => {
    expect(StringToJSON("")).toStrictEqual({});
});

test("input of single attribute string should return valid json", () => {
    let one = {attr: "value"};
    expect(StringToJSON("attr value")).toStrictEqual(one);
});

test("input of multiple attribute string should return valid json", () => {
    let two = {
        first: "one",
        second: "two"
    };
    expect(StringToJSON("first one second two")).toStrictEqual(two)
});