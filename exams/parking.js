// class Parking {
//     constructor(capacity) {
//         this.capacity = capacity
//         this.vehicles = []
//     }
//     addCar(carModel, carNumber) {
//         if (this.vehicles.length == this.capacity) {
//             throw new Error(`Not enough parking space.`)
//         }
//         let newCar = {
//             carModel,
//             carNumber,
//             payed: false
//         }
//         this.capacity--
//         this.vehicles.push(newCar)
//         return `The ${carModel}, with a registration number ${carNumber}, parked.`
//     }
//     removeCar(carNumber) {
//         const carIndex = this.vehicles.findIndex(car => car.carNumber == carNumber)
//         if (carIndex < 0) {
//             throw new Error(`The car, you're looking for, is not found.`)
//         }
//         if (this.vehicles[carIndex].payed == false) {
//             throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
//         }
//         this.capacity++
//         this.vehicles.splice(carIndex, 1)
//         return `${carNumber} left the parking lot.`
//     }
//     pay(carNumber) {
//         let car = this.vehicles.find(car => car.carNumber == carNumber)
//         if (!car) {
//             throw new Error(`${carNumber} is not in the parking lot.`)
//         }
//         if (car.payed == true) {
//             throw new Error(`${carNumber}'s driver has already payed his ticket.`)
//         }
//         car.payed = true
//         return `${carNumber}'s driver successfully payed for his stay.`
//     }
//     getStatistics(carNumber) {
//         if (!carNumber) {
//             return [
//                 `The Parking Lot has ${this.capacity} empty spots left.`,
//                 this.vehicles
//                 .sort((a, b) => a.carModel.localeCompare(b.carModel))
//                     .map(car => `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
//                     .join('\n')
//             ].join('\n')
//         }
//         let car = this.vehicles.find(car => car.carNumber == carNumber)
//         return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'} `
//     }
// }
class Parking {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    addCar(carModel, carNumber) {
        if (this.capacity == this.vehicles.length) throw new Error("Not enough parking space.")
        let newCar = {
            carModel,
            carNumber,
            payed: false
        }
        this.vehicles.push(newCar)
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }
    removeCar(carNumber) {
        const searchedCar = this.vehicles.find(car => car.carNumber == carNumber)
        //if (!this.vehicles.some(car=> car.carNumber == carNumber)) throw new Error("The car, you're looking for, is not found.")
        if (searchedCar == undefined) throw new Error("The car, you're looking for, is not found.")
        if (searchedCar.payed == false) throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        this.vehicles.splice(this.vehicles.indexOf(searchedCar), 1)
        return `${carNumber} left the parking lot.`
    }
    pay(carNumber) {
        const searchedCar = this.vehicles.find(car => car.carNumber === carNumber)
        if (searchedCar === undefined) throw new Error(`${carNumber} is not in the parking lot.`)
        if (searchedCar.payed == true) throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        searchedCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber) {
        let result = []
        if (carNumber == undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`)
            const sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(car => result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`))
            result.push(sorted)
        }
        if (carNumber) {
            const sCar = this.vehicles.find(c => c.carNumber === carNumber)
            result.push(`${sCar.carModel} == ${sCar.carNumber} - ${sCar.payed ? 'Has payed' : 'Not payed'}`)
        }
        return result.join('\n')
    }
}

const parking = new Parking(12);
console.log(parking.addCar('BMW zz', 'pa0000sa'));
console.log(parking.addCar("Volvo yy", "TX3691CA"));
console.log(parking.addCar("Astra xx", "CA3691CA"));
console.log(parking.getStatistics('pa0000sa'));
//console.log(parking.removeCar("TX3691CA"));
//console.log(parking.pay('pa0000sa'));

// console.log(parking.getStatistics());

// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));
