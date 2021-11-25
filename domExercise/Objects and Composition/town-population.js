function solve(arr) {
    const result = arr.reduce((acc, curr) => {
        let [name, count] = curr.split(' <-> ')
        acc[name] == undefined
            ? acc[name] = Number(count)
            : acc[name] += Number(count)
        return acc
    }, {})
    // Object.keys(result).forEach(element => {
    //     console.log(`${element} : ${result[element]}`);
    // });
    Object.entries(result).forEach(element => {
        console.log(`${element[0]} : ${element[1]}`)
    })
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)