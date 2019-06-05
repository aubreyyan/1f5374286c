import React from 'react';
import getList from './getList';

test("function exists", () => {
    expect(getList).not.toBeNull();
});

test("object is a function", () => {
    expect(typeof getList).toBe("function");
});

test("input of empty string returns empty string list", () => {
    expect(getList("", "number")).toEqual([""]);
    expect(getList("", "ccss")).toEqual([""]);
});

test("input of null returns empty string list", () => {
    expect(getList(null, "number")).toEqual([""]);
    expect(getList(null, "ccss")).toEqual([""]);
});

test("input of numbers returns empty string list", () => {
    expect(getList(1234567, "number")).toEqual([""]);
    expect(getList(1234567, "ccss")).toEqual([""]);
});

test("input of invalid format returns emprt string list", () => {
    expect(getList("any string", "invalid")).toEqual([""]);
});

test("input of number format string without numbers returns same string list", () => {
    expect(getList("no numbers here", "number")).toEqual(["no numbers here"]);
});

test("input of number format string with number notation returns valid response", () => {
    expect(getList("1.first element2.second element3.third element", "number"))
        .toEqual(["1.first element", "2.second element", "3.third element"]);
});

test("input of number format string with space delimiting returns valid response without end whitespace", () => {
    expect(getList("1.first element 2.second element 3.third element", "number"))
        .toEqual(["1.first element", "2.second element", "3.third element"]);
});

test("input of ccss format string with proper notation returns valid response", () => {
    expect(getList("CCSS.ELA-Literacy.CCRA.R.10\nCCSS.ELA-Literacy.CCRA.W.2", "ccss"))
        .toEqual(["CCSS.ELA-Literacy.CCRA.R.10", "CCSS.ELA-Literacy.CCRA.W.2"]);
});

test("input of ccss format string with space delimiting returns valid response without whitespace", () => {
    expect(getList("CCSS.ELA-Literacy.CCRA.R.10\n CCSS.ELA-Literacy.CCRA.W.2 ", "ccss"))
        .toEqual(["CCSS.ELA-Literacy.CCRA.R.10", "CCSS.ELA-Literacy.CCRA.W.2"]);
});