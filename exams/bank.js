// class Bank {
//     constructor(bankName){
//         this.bankName = bankName
//         this.allCustomers = []
//     }
//     newCustomer (customer){
//         const sameCust = this.allCustomers.some(c => c.firstName == customer.firstName && c.lastName == customer.lastName && c.personalId == customer.personalId)
//         if(sameCust){
//             throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
//         }
//         this.allCustomers.push(customer)
//         return customer
//     }
//     depositMoney (personalId, amount){
//         const cust = this.allCustomers.find(c => c.personalId == personalId)
//         if(!cust){
//             throw new Error(`We have no customer with this ID!`)
//         }

//         if(!Object.keys(cust).includes('totalMoney')){
//             cust.totalMoney = 0
//             cust.action = []
//         }
//         cust.totalMoney += +amount
//         cust.action.push(`${cust.action.length+1}. ${cust.firstName} ${cust.lastName} made deposit of ${amount}$!`)
//         return `${cust.totalMoney}$`
//     }
//     withdrawMoney (personalId, amount){
//         const cust = this.allCustomers.find(c => c.personalId == personalId)
//         if(!cust){
//             throw new Error(`We have no customer with this ID!`)
//         }
//         if(cust.totalMoney < amount){
//             throw new Error(`${cust.firstName} ${cust.lastName} does not have enough money to withdraw that amount!`);
//         }
//         cust.totalMoney -= amount
//         cust.action.push(`${cust.action.length+1}. ${cust.firstName} ${cust.lastName} withdrew ${amount}$!`)
//         return `${cust.totalMoney}$`
//     }
//     customerInfo (personalId){

//         const cust = this.allCustomers.find(c => c.personalId == personalId)
//         if(cust.length == 0){
//             throw new Error (`We have no customer with this ID!`)
//         }
//         const transact = cust.action.reverse()
//         return [`Bank name: ${this.bankName}`, `Customer name: ${cust.firstName} ${cust.lastName}`, `Customer ID: ${cust.personalId}`, `Total Money: ${cust.totalMoney}$`, `Transactions:`, `${transact.join('\n')}`].join('\n')
//     }
// }

class Bank {
    constructor(bankName) {
        this.bankName = bankName
        this.allCustomers = []
    }
    newCustomer(customer) {
        if (this.allCustomers.some(c => c.firstName == customer.firstName && c.lastName == customer.lastName)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer)
        return customer
    }
    depositMoney(personalId, amount) {
        const searchedCust = this.allCustomers.find(c => c.personalId == personalId)
        if (searchedCust == undefined) throw new Error(`We have no customer with this ID!`)
        if (!Object.keys(searchedCust).includes("totalMoney")) {
            searchedCust.totalMoney = 0
        }
        if (!Object.keys(searchedCust).includes("transactions")) {
            searchedCust.transactions = []
        }
        searchedCust.transactions.push({ deposit: amount, numb: `${searchedCust.transactions.length + 1}` })
        searchedCust.totalMoney += amount
        return `${searchedCust.totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        const searchedCust = this.allCustomers.find(c => c.personalId == personalId)
        if (searchedCust == undefined) throw new Error(`We have no customer with this ID!`)
        if (searchedCust.totalMoney < amount) throw new Error(`${searchedCust.firstName} ${searchedCust.lastName} does not have enough money to withdraw that amount!`)
        searchedCust.transactions.push({ withdraw: amount, numb: `${searchedCust.transactions.length + 1}` })
        searchedCust.totalMoney -= amount
        return `${searchedCust.totalMoney}$`
    }
    customerInfo(personalId) {
        let result = []
        const searchedCust = this.allCustomers.find(c => c.personalId == personalId)
        if (searchedCust == undefined) throw new Error(`We have no customer with this ID!`)
        result.push(`Bank name: ${this.bankName}`, `Customer name: ${searchedCust.firstName} ${searchedCust.lastName}`, `Customer ID: ${searchedCust.personalId}`, `Total Money: ${searchedCust.totalMoney}$`)
        if (searchedCust.transactions.length) {
            result.push(`Transactions:`)
            searchedCust.transactions.sort((a, b) => b.numb - a.numb).forEach(t => {
                if (t.deposit) {
                    result.push(`${t.numb}. ${searchedCust.firstName} ${searchedCust.lastName} made deposit of ${t.deposit}$!`)
                }
                if (t.withdraw) {
                    result.push(`${t.numb}. ${searchedCust.firstName} ${searchedCust.lastName} withdrew ${t.withdraw}$!`)
                }
            });
        }
        return result.join('\n')
    }
}
let bank = new Bank('SU bank');

console.log(bank.newCustomer({ firstName: 'Sv', lastName: 'Nak', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'mih', lastName: 'Mil', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
