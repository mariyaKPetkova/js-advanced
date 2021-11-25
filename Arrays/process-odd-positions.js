function solve(arr) {
    const result = arr.reduce((acc, curr, ind) => {
        if (ind % 2 !== 0) return [...acc, curr]
        return acc
    }, [])
        .map(num => num * 2)
        .reverse()
        .join(' ')
    return result
}
console.log(solve([10, 15, 20, 25]));