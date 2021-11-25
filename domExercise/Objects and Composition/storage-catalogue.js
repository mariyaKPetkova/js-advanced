function solve(arr) {
    const resObj = arr.reduce((acc, curr) => {
        let [product, price] = curr.split(' : ')
        const letter = product[0]
        if (!acc[letter]) {
            acc[letter] = {
                [product]: Number(price)
            }
        } else {
            acc[letter][product] = Number(price)
        }
        return acc
    }, {})

    const abArr = Object.entries(resObj)
        .sort((a, b) => a[0].localeCompare(b[0]))

    abArr.forEach(arr => {
        console.log(arr[0]);
        Object.entries(arr[1])
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(el => {
                console.log(`${el[0]}: ${el[1]}`);
            })
    })
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);