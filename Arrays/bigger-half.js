function solve(arr){
    const result = arr.sort((a,b)=>a-b)
    .slice(arr.length/2)
    return result
}
console.log(solve([3, 19, 14, 7, 2]));