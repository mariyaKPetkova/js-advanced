function solve(input) {
    const result = input.reduce((acc, curr) => {
        let [name, level, items] = curr.split(' / ')
        level = Number(level)
        items = items
            ? items.split(', ')
            : []
        obj = {
            name,
            level,
            items
        }
        return [...acc, obj]
    }, [])
    return JSON.stringify(result)
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1']
));
//2nd solution:
// function solve(arr){
//     let result =  arr.reduce((acc,curr)=>{
//         let [name,level,items] = curr.split(' / ')
//         function getItems(str){
//             if(str != undefined){
//                 return str.split(', ')
//             }
//             return []
//         }
//         hero = {
//             name: name,
//             level: Number(level),
//             items: getItems(items)
//         }
//         return [...acc,hero]
//     },[])
//     return JSON.stringify(result)
//     }
// console.log(solve(['Isacc / 25',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// ))

