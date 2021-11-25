const { expect } = require('chai')
const isSymmetric = require('./symmetry.js')

describe('symmetric', () => {
    it('two symmetric numbs', () => {
        expect(isSymmetric([1, 1])).to.be.true
    })
    it('three symmetric numbs', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true
    })
    it('two not symmetric numbs', () => {
        expect(isSymmetric([1, 2])).to.be.false
    })
    it('two symmetric strings', () => {
        expect(isSymmetric(['a', 'a'])).to.true
    })
    it('two not symmetric strings', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false
    })
    it('diff type', () => {
        expect(isSymmetric(['1', 1])).to.be.false
    })
    it('invalid argument', () => {
        expect(isSymmetric('a')).to.be.false
    })
})