function solve(obj) {
    const {
        model,
        power,
        carriage,
        color,
        wheelsize
    } = obj;

    function getEngine(power) {
        const engine = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]//.sort((a, b) => a.power - b.power);
        return engine.find(el => el.power >= power)
                        //(({power}) => power >= powerEl)
    }
    function getCarrige(carriage, color) {
        return {
            type: carriage,
            color
        }
    }
    function getWheels(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);
        return Array(4).fill(wheel, 0, 4) // [wheel, wheel, wheel, wheel]
    }
    
    return {
        model,
        engine: getEngine(power),
        carriage: getCarrige(carriage, color),
        wheels: getWheels(wheelsize)
    }
}
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));
// 2nd solution:
//     function getEngine(power) {
//         const engine = [
//             { power: 90, volume: 1800 },
//             { power: 120, volume: 2400 },
//             { power: 200, volume: 3500 }
//         ]
//         return engine.find(el => el.power >= power)
//     }
//     function getCarriage(carriage,color){
//         return {
//             type: carriage,
//             color:color
//         }
//     }
//     function getWheels(wheels) {
//         if(wheels % 2 != 0) return Array(4).fill(wheels,0,4)
//         return Array(4).fill(wheels-1,0,4)    
//     }
//     return {
//         model: obj.model,
//         engine: getEngine(obj.power),
//         carriage: getCarriage(obj.carriage,obj.color),
//         wheels: getWheels(obj.wheelsize)
//     }
// }