function solve(product, quantity, price) {
    const total = price * (quantity / 1000)
    console.log(`I need $${total.toFixed(2)} to buy ${(quantity / 1000).toFixed(2)} kilograms ${product}.`);
}