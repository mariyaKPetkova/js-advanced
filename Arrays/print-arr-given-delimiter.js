function solve(arr, step) {

    return arr.map(word => word + step)
        .join('')
        .slice(0, -1)

}
console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
));