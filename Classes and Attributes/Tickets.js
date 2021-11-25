function solve(arr, secondParam) {
    const towns = arr.reduce((acc, curr) => {
        let [destination, price, status] = curr.split('|');
        class Ticket {
            constructor(destination, price, status) {
                this.destination = destination,
                    this.price = Number(price),
                    this.status = status
            }
        }
        let ticket = new Ticket(destination, price, status)
        return [...acc, ticket]
    }, [])

    function sortResult(arrTowns) {
        const sortFn = {
            destination: (a, b) => a.destination.localeCompare(b.destination),
            price: (a, b) => a.price - b.price,
            status: (a, b) => a.status.localeCompare(b.status)
        }
        return Object.values(arrTowns).sort(sortFn[secondParam])
    }
    return sortResult(towns)
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'

));