function solve(arr) {
    return arr.reduce((acc, curr) => {
        return acc[acc.length - 1] <= curr || acc.length === 0
            ? [...acc, curr]
            : acc
    }, [])
}
console.log(solve(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24]
))