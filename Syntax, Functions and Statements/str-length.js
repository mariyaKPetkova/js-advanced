function solve(...input) {
    const count = input.length
    const sum = input.reduce((acc, curr) => {
        acc += curr.length
        return acc
    }, 0)
    console.log(sum);
    console.log(Math.floor(sum/count));
}
solve('chocolate', 'ice cream', 'cake')