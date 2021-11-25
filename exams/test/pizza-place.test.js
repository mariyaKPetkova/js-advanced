const pizzUni = require('../pizza-place.js')
const { describe } = require('mocha')
const { assert } = require('chai')

describe("ToDo", () => {
    it("makeAnOrder", () => {
        let pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' }
        let pizza2 = { orderedPizza: 'pizza' }
        let pizza1 = { orderedDrink: 'drink' }
        let pizza3 = {}
        assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.')
        assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.')
        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered pizza`)
        assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered pizza and drink.`)
    });
});
describe("TDo", () => {
    it("getRemainingWork",  () =>{
        let pizzaR = [{ pizzaName: 'pizza', status: 'ready' }, { pizzaName: 'pizza', status: 'ready' }]
        let pizzaP = [{ pizzaName: 'pizza', status: 'preparing' }, { pizzaName: 'pizza', status: 'preparing' }]
        let pizzaM = [{ pizzaName: 'pizza', status: 'ready' }, { pizzaName: 'pizza', status: 'preparing' }]

        assert.equal(pizzUni.getRemainingWork(pizzaR), 'All orders are complete!')
        assert.equal(pizzUni.getRemainingWork(pizzaP), `The following pizzas are still preparing: pizza, pizza.`)
        assert.equal(pizzUni.getRemainingWork(pizzaM), `The following pizzas are still preparing: pizza.`)
    });
});
describe("ToD", () => {
    it("orderType", () =>{
        assert.equal(pizzUni.orderType(100, 'Delivery'), 100)
        assert.equal(pizzUni.orderType(100,'Carry Out'), 90)
    });
});
