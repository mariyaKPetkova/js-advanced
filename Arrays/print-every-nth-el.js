function solve(arr, step) {
    // return arr.reduce((acc, element, index) => {
    //     return index % step === 0
    //         ? [...acc, element]
    //         : acc
    // }, [])
    //2nd solution:
    return arr.filter((_, index) => index % step === 0)
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2

));