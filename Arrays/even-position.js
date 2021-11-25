function solve(arr) {
    const result = arr.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            // acc.push(curr)
            return [...acc, curr]
        }
        return acc
    }, [])
    return result.join(' ')
}
console.log(solve(['20', '30', '40', '50', '60']));