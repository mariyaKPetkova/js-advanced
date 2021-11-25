function solve(arr) {
    const result = arr.sort((a, b) => a - b).reduce((acc, curr) => {
        let first = arr.shift()
        let second = arr.pop()
        acc.push(first, second)
        return acc
    }, [])
    return result.concat(arr)
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));