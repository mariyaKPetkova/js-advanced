function solve(arr){
    return arr.reduce((acc,curr,i,arr)=>{
        if(i % 2 === 0){
            acc[curr] = Number(arr[i+1])
        }
        return acc
    },{}) 
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
