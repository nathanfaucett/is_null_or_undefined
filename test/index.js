var tape = require("tape"),
    isNullOrUndefined = require("..");

tape("isNullOrUndefined(value) returns true for null and undefined", function(assert) {
    assert.equal(isNullOrUndefined(null), true, "null returns false");
    assert.equal(isNullOrUndefined(undefined), true, "undefined returns false");
    assert.end();
});

tape("isNullOrUndefined(value) returns false for other core js types", function(assert) {

    assert.equal(isNullOrUndefined(NaN), false, "NaN returns false");
    assert.equal(isNullOrUndefined(true), false, "bool returns false");
    assert.equal(isNullOrUndefined(45), false, "number returns false");
    assert.equal(isNullOrUndefined("string"), false, "string returns false");
    assert.equal(isNullOrUndefined(/regex/), false, "regexp returns false");
    assert.equal(isNullOrUndefined({}), false, "object returns false");
    assert.equal(isNullOrUndefined([]), false, "array returns false");
    assert.equal(isNullOrUndefined(function noop() {}), false, "function returns false");

    assert.end();
});
