function solve(arr, step) {
    return arr.reduce((acc, curr, index) => {
        if (step < index+1) {
            // const el = acc[0]
            // const newArr = acc.slice(1)
            // newArr.push(el)
            // return newArr
            return [...acc.slice(1),acc[0]]
        }
        return acc
    }, arr).join(' ')
}
console.log(solve(
    ['1',
    '2',
    '3',
    '4'],
    2
));