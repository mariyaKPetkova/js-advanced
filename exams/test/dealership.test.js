const dealership = require('../dealership')
//const { describe } = require('mocha')
const { assert, expect } = require('chai')

describe("first", () => {
    it("newCarCost", () => {
        assert.equal(dealership.newCarCost('Audi A4 B8',30000),15000)
        assert.equal(dealership.newCarCost('a',1),1)
        // expect(dealership.newCarCost('Audi A4 B8',30000)).to.equal(15000)
        // expect(dealership.newCarCost('a',1)).to.equal(1)
    });
});
describe("second", () => {
    it("carEquipment", () => {
        // expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        // expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        // expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        assert.deepEqual(dealership.carEquipment(['a'],[0]),['a'])
        assert.deepEqual(dealership.carEquipment(['a','b','c'],[0,2]),['a','c'])
        assert.deepEqual(dealership.carEquipment(['a','b','c'],[1]),['b'])
    });
});
describe("third", () => {
    it("euroCategory", () => {
        // expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        // expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        // expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        assert.equal(dealership.euroCategory(5),`We have added 5% discount to the final price: 14250.`)
        assert.equal(dealership.euroCategory(1),'Your euro category is low, so there is no discount from the final price!')
        assert.equal(dealership.euroCategory(4),`We have added 5% discount to the final price: 14250.`)
    });
});