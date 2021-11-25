const { assert, expect } = require('chai')
const lookupChar = require('./char-lookup')

describe('lookupChar', () => {
    it('correct input', () => {
        assert.equal(lookupChar('abc', 1), 'b')
    })
    it('incorrect input', () => {
        assert.isUndefined(lookupChar('abc', 1.1))
        assert.isUndefined(lookupChar('abc', 'a'))
        assert.isUndefined(lookupChar(1, 1))
    })
    it('incorrect index', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index')
        assert.equal(lookupChar('abc', 3), 'Incorrect index')
    })
})