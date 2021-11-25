function solve(arr) {
    const result = arr.reduce((acc, curr, index) => {
        curr === 'add'
            ? acc.push(index + 1)
            : acc.pop()

        return acc
    }, []).join('\n')
    
    if (result.length === 0) return `Empty`
    return result
}
console.log(solve([
    'add',
    'add',
    'remove',
    'add',
    'add']
));