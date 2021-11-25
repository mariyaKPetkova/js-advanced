function solve(arr) {
    const result = arr.reduce((acc, curr) => {
        curr < 0 ?
            acc.unshift(curr)
            : acc.push(curr)
            // [curr, ...acc]  ???
            // :[...acc, curr] 
            console.log(acc);
        return acc
    }, [])
    return result.join('\n')
}
console.log(solve([7, -2, 8, 9]));