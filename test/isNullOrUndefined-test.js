var test = require("tape"),
    isNullOrUndefined = require("../src/isNullOrUndefined");

test("returns true for null and undefined", function(t) {

    t.plan(2);
    t.equal(isNullOrUndefined(null), true, "null returns false");
    t.equal(isNullOrUndefined(undefined), true, "undefined returns false");

});

test("returns false for other core js types", function(t) {

    t.plan(8);

    t.equal(isNullOrUndefined(NaN), false, "NaN returns false");
    t.equal(isNullOrUndefined(true), false, "bool returns false");
    t.equal(isNullOrUndefined(45), false, "number returns false");
    t.equal(isNullOrUndefined("string"), false, "string returns false");
    t.equal(isNullOrUndefined(/regex/), false, "regexp returns false");
    t.equal(isNullOrUndefined({}), false, "object returns false");
    t.equal(isNullOrUndefined([]), false, "array returns false");
    t.equal(isNullOrUndefined(function noop() {}), false, "function returns false");

});
