function solve(arr) {
    const rowSumResult = arr.reduce((acc, currArr) => {
        const sumRow = currArr.reduce((a, b) => a + b, 0)
        if (!acc[sumRow]) {
            acc[sumRow] = 0
        }
        acc[sumRow] += 1
        return acc
    }, {})
    if (Object.keys(rowSumResult).length > 1) return false
    const collSumResult = arr.reduce((acc, currArr, index, arr) => {
        const sumColl = arr[0][index] + arr[1][index] + arr[2][index]
        if (!acc[sumColl]) {
            acc[sumColl] = 0
        }
        acc[sumColl] += 1
        return acc
    }, {})
    if (Object.keys(collSumResult).length > 1) return false
    return true
}

console.log(solve(
[[1, 0, 0],
 [0, 0, 1],
 [0, 1, 0]]
   ))