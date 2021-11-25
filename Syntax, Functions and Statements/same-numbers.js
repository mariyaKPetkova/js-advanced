function solve(num) {
    const digitsStr = num.toString().split('');
    const digitsArr = digitsStr.map(Number);
    const result = digitsArr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0
        }
        acc[curr]++
        return acc
    }, {})

    Object.keys(result).length > 1
        ? console.log('false')
        : console.log('true')

    const sum = Object.entries(result).reduce((acc, curr) => {
        return acc += curr[0] * curr[1]
    }, 0);
    console.log(sum);
}
//reduce(function(a,b) => {return a+b},0)
solve(1234)