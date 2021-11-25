// let sum3Curry = function (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
let sum3Curry = (a) => (b) => (c) => a + b + c
// let sum3b = sum3Curry(1)
// let sum3c = sum3b(2)
// let result = sum3c(3)
// console.log(result);
console.log(sum3Curry(1)(2)(3));

