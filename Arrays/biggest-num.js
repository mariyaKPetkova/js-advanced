function solve(arr) {
    const result = arr.reduce((acc, curr) => {
        let biggestN = curr.sort((a, b) => a - b).slice(-1)
        let max = Number.MIN_SAFE_INTEGER
        if (biggestN > max) {
            max = biggestN
            acc.push(max)
        }
        return acc
    }, []).sort((a, b) => a - b).slice(-1).join('')
    return result
}
console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));