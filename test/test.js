var assert = require('assert');
var vanityToNum = require('../vanityToNum');

describe('Basic tests for vanity to numeric converter', function () {
    it('should convert simple vanity number', function () {
        assert.equal(vanityToNum("1800FLOWERS"), "18003569377");
    });
    it('should convert vanity number with spaces and brackets', function () {
        assert.equal(vanityToNum("1 (800) FLOWERS"), "18003569377");
    });
    it('should convert vanity numbers with dashes', function () {
        assert.equal(vanityToNum("101-5SH-ARAD"), "1015742723");
    });
    it('should convert vanity number longer than 11 numbers', function () {
        assert.equal(vanityToNum("1 (800) Progressive"), "18007764737");
    });
    it('should throw an error for input too small to be a phone number', function () {
        try {
            vanityToNum("123456");
        }
        catch (err) {
            assert.equal(err, "123456 is too small to be a phone number!");
        }
    });
    it('should throw an error for null input', function () {
        try {
            vanityToNum();
        }
        catch (err) {
            assert.equal(err, "Input is Null");
        }
    });
});