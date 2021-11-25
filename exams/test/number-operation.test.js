const numberOperations = require('../number-operations')
const { assert, expect } = require('chai')
const { describe } = require('mocha');
const { sumArrays } = require('../number-operations');

describe("first", () => {
    it("powNumber", () => {
        assert.equal(numberOperations.powNumber(1),1)
        assert.equal(numberOperations.powNumber(0),0)
        assert.equal(numberOperations.powNumber(-1),1)
    });
});
describe("second", () => {
    it("numberChecker", () => {
       assert.throw(()=>numberOperations.numberChecker('a'),'The input is not a number!')
       assert.equal(numberOperations.numberChecker(99),'The number is lower than 100!')
       assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
       assert.equal(numberOperations.numberChecker(101),'The number is greater or equal to 100!')
    });
});
describe("third", () => {
    it("sumArrays", () => {
        assert.deepEqual(numberOperations.sumArrays([1],[1]),[2])
        assert.deepEqual(numberOperations.sumArrays([1,1],[1,1]),[2,2])
        assert.deepEqual(numberOperations.sumArrays([1],[1,1]),[2,1])
        assert.deepEqual(numberOperations.sumArrays([1,1],[1]),[2,1])
        assert.deepEqual(numberOperations.sumArrays([1],[1,1,1]),[2,1,1])
        assert.deepEqual(numberOperations.sumArrays([1,1,1],[1]),[2,1,1])
    });
});