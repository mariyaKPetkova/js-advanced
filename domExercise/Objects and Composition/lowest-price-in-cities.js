function solve(input) {
    const result = input.reduce((acc, curr) => {
        let [town, product, price] = curr.split(' | ')
        price = Number(price)
        if (!acc[product]) {
            acc[product] = {
                price,
                town
            }
        }
        if (acc[product].price > price) {
            acc[product].price = price
            acc[product].town = town
        }
        return acc
    }, {})
    Object.keys(result).forEach(product => {
        console.log(`${product} -> ${result[product].price} (${result[product].town})`);
    })
}
solve(['Sofia City | Audi | 100000',
    'Mexico City | Audi | 1000']
)