function solve(arr) {
    const result = arr.sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ')
    return result
}
console.log(solve([3, 0, 10, 4, 7, 3]));