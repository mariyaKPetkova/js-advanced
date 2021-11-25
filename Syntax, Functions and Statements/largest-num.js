function solve(...input) {
    const result = input.reduce(function(a,b){
        return Math.max(a,b)
    });
    console.log(`The largest number is ${result}.`);
}
solve(5, -3, 16)