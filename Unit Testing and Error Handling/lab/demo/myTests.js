const  { sum } = require('./myModule')
const { expect } = require('chai')
//mochaconst {assert} = require('chai')
describe('Sum function', () => {
    it('works', () => {
        expect(sum(1, 2)).to.equal(3)
        //assert.equal(sum(1,2),3)
    })
})