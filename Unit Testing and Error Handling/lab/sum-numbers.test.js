const { expect } = require('chai')
const sum = require('./sum-numbers.js')

describe('Sum func', () => {
    it('one numb', () => {
        expect(sum([1])).to.equal(1)
    })
    it('two numb', () => {
        expect(sum([1,1])).to.equal(2)
    })
    it('three numb', () => {
        expect(sum([1,2,3])).to.equal(6)
    })
    
})