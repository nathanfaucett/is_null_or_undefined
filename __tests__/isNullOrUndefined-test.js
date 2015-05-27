jest.dontMock("../src/isNullOrUndefined");

var isNullOrUndefined = require("../src/isNullOrUndefined");

describe("isNullOrUndefined", function() {

    it("returns true for null and undefined", function() {

        expect(isNullOrUndefined(null)).toBe(true);
        expect(isNullOrUndefined(undefined)).toBe(true);

    });

    it("returns false for all other types", function() {

        expect(isNullOrUndefined(NaN)).toBe(false)
        expect(isNullOrUndefined(true)).toBe(false)
        expect(isNullOrUndefined(45)).toBe(false)
        expect(isNullOrUndefined("string")).toBe(false)
        expect(isNullOrUndefined(/regex/)).toBe(false)
        expect(isNullOrUndefined({})).toBe(false)
        expect(isNullOrUndefined([])).toBe(false)
        expect(isNullOrUndefined(function noop() {})).toBe(false)

    });

});
