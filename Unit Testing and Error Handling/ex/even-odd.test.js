const {assert} = require('chai')
const isOddOrEven = require('./even-odd')

describe('oddOrEven', ()=>{
    it('not string input',()=>{
        assert.isUndefined(isOddOrEven(1))
    })
    it('odd input',()=>{
        assert.equal(isOddOrEven('a'),'odd')
    })
    it('even input',()=>{
        assert.equal(isOddOrEven('aa'),'even')
    })
})