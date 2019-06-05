import React from 'react';
import getTimeZone from './getTimeZone';

const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
    "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
    "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "NA"];

const expected = [
    "CST", "AKST", "MST", "CST", "PST", "MST", "EST", "EST", "EST", "EST", "HST", "MST", "CST", "EST", "CST", "CST",
    "CST", "CST", "EST", "EST", "EST", "EST", "CST", "CST", "CST", "MST", "CST", "PST", "EST", "EST",
    "MST", "EST", "EST", "EST", "EST", "CST", "PST", "EST", "EST", "EST", "CST/MST", "CST/EST", "CST", "MST", "EST",
    "EST", "PST", "EST", "CST", "MST", ""];

test("all state codes should correspond to respective time zones", () => {
    for(var i = 0; i < states.length; i++){
        console.log(states[i])
        console.log(expected[i])
        expect(getTimeZone(states[i])).toBe(expected[i]);
    }
});