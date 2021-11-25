function solve(length, countNum) {
    let result = [1];

    for (let i = 1; i < length; i++) {
        let startIndex = Math.max(0, i - countNum);
        let currentElement = result.slice(startIndex, startIndex + countNum).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    return result.join(" ")
}
console.log(solve(6, 2));