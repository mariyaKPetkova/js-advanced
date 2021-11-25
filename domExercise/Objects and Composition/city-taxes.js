function solve(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate : 10,
        // collectTaxes() {
        //     this.treasury += this.population * this.taxRate
        // },
        // applyGrowth(percent) {
        //     this.population += Math.floor(this.population * percent / 100)
        // },
        // applyRecession(percent) {
        //     this.treasury -= Math.ceil(this.treasury * percent / 100)
        // }
        collectTaxes:()=> {
            city.treasury += city.population * city.taxRate
        },
        applyGrowth:(percent) => {
            city.population += Math.floor(city.population * percent / 100)
        },
        applyRecession:(percent) =>  {
            city.treasury -= Math.ceil(city.treasury * percent / 100)
        }
    };
    return city
}
const city = solve('Tortuga', 7000, 15000)
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
