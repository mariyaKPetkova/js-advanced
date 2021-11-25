function solve() {
    
    const result = [...arguments].map(arg => {
        const type = typeof arg
        const value = arg
        return { [type]: value }
    })
    const counts = result.reduce((acc, curr) => {
        const type = Object.keys(curr)
        if (!acc[type]) {
            acc[type] = 0
        }
        acc[type]++
        return acc

    }, {})
    
    result.forEach(el => {
        const obj = Object.keys(el)
        console.log(`${obj}: ${el[obj]} `);
    })
    
    const sortedCount = Object.entries(counts).sort((a, b) => b[1] - a[1])
    sortedCount.forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    })

}
solve('cat', 34, 42, function () { console.log('Hello world!'); })