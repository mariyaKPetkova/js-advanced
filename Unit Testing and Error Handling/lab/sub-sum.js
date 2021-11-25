function solve(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) return NaN
    if (startIndex < 0) {
        startIndex = 0
    }
    if (endIndex > arr.length) {
        endIndex = arr.length
    }
    const result = arr.slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, c) => a + c, 0)
    return result
}
function test(id, actual, expected) {
    return actual == expected
        ? `Test ${id} Pass`
        : `Test ${id} Failed`
}

console.log(test(1, solve([10, 20, 30, 40, 50, 60], 3, 300), 150));
console.log(test(2, solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2), 3.3));
console.log(test(3, solve([], 1, 2), 0));

console.log(Number.isNaN(solve([10, 'twenty', 30, 40], 0, 2)));
console.log(Number.isNaN(solve('text', 0, 2)));