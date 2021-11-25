const { assert } = require('chai')
const mathEnforcer = require('./math-enforcer')

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('number input', () => {
            assert.equal(mathEnforcer.addFive(1), 6)
            assert.equal(mathEnforcer.addFive(0), 5)
            assert.equal(mathEnforcer.addFive(-5), 0)
            assert.equal(mathEnforcer.addFive(1.2), 6.2)
        })
        it('not number input', () => {
            assert.isUndefined(mathEnforcer.addFive('a'))
        })
    })
    describe('subtractTen', () => {
        it('number input', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1)
            assert.equal(mathEnforcer.subtractTen(0), -10)
            assert.equal(mathEnforcer.subtractTen(-10), -20)
            assert.equal(mathEnforcer.subtractTen(11.1), 1.0999999999999996)
        })
        it('not number input', () => {
            assert.isUndefined(mathEnforcer.subtractTen('a'))
        })
    })
    describe('subtractTen', () => {
        it('number input', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2)
            assert.equal(mathEnforcer.sum(-1, 1), 0)
            assert.equal(mathEnforcer.sum(-1, -1), -2)
            assert.equal(mathEnforcer.sum(1.1, 1.1), 2.2)
        })
        it('not numbers input', () => {
            assert.isUndefined(mathEnforcer.sum('a', 1))
            assert.isUndefined(mathEnforcer.sum(1, 'a'))
        })
    })
})