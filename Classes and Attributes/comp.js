class Company {
    constructor() {
        this.departaments = []
    }
    addEmployee(name, salary, position, depart) {
        if (!name || !position || !depart || !salary || salary < 0) {
            throw new Error("Invalid input!");
        }
        let newPerson = {
            name,
            salary,
            position
        }
        if (!this.departaments[depart]) {
            this.departaments[depart] = []
        }
        this.departaments[depart].push(newPerson)
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {

        let averageSalary = Object.entries(this.departaments)
            .reduce((acc, curr) => {
                if (!acc[curr[0]]) {
                    acc[curr[0]] = 0
                }

                const averageS = curr[1].reduce((acc, curr) => {
                    const sal = Object.values(curr);
                    return acc += sal[1]
                }, 0)

                acc[curr[0]] = (averageS / curr[1].length).toFixed(2)
                return acc
            }, {})

        const bestDep = Object.entries(averageSalary)
            .sort((a, b) => b[1] - a[1])[0]
        const sortedStaff = Object.values(this.departaments[bestDep[0]])
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .map(person => Object.values(person).join(' '))
        return `Best Department is: ${bestDep[0]}\nAverage salary: ${bestDep[1]}\n${sortedStaff.join('\n')}`
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
