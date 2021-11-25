
class ChristmasDinner {
    constructor(budget) {
        // if (budget < 0) {
        //             throw new Error(`The budget cannot be a negative number`)
        //         }
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value
    }
    get budget() {
        return this._budget
    }

    shopping([...product]) {
        let prod = product[0]
        let price = Number(product[1])
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(prod)
        this.budget -= price
        return `You have successfully bought ${prod}!`
    }
    recipes({ ...recipe }) {  //{ recipeName: string, productsList: array of strings }
        const prods = recipe.productsList
        const name = recipe.recipeName
        const missed = prods.filter(p => !this.products.includes(p))
        if (missed.length > 0) {
            throw new Error("We do not have this product")
        }
        this.dishes.push({ recipeName: name, productsList: prods })
        return `${name} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if (!this.dishes.some(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish")
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited")
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let result = []
        Object.entries(this.guests).forEach(guest => {
            const p = this.dishes.find(d => d.recipeName === guest[1])
            result.push(`${guest[0]} will eat ${guest[1]}, which consists of ${p.productsList.join(', ')}`)
        });
        return result.join('\n')
    }
}
let dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
console.log(dinner.budget);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());