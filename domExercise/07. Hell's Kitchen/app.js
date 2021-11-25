function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   function onClick() {
      const input = document.querySelector('#inputs textarea').value
      const restaurantsInfo = JSON.parse(input).reduce((acc, curr) => {
         let [name, staff] = curr.split(' - ')
         let personInfo = staff.split(', ')
         let averageSalary = 0;
         let objPersonInfo = personInfo.reduce((acc, curr, i, arr) => {
            let [personName, salary] = curr.split(' ')
            salary = Number(salary)
            averageSalary += (salary / (arr.length))
            if (!acc[personName]) {
               acc[personName] = salary
            }
            return acc
         }, {})
         acc[name] = objPersonInfo
         acc[name].averageSalary = averageSalary
         return acc
      }, {})
      const bestR = Object.entries(restaurantsInfo)
         .sort((a, b) => b[1].averageSalary - a[1].averageSalary) // || )
         .slice(0,1)
      const bestS = Object.entries(bestR[0][1])
         .sort((a, b) => a[1] - b[1])
         .slice(-1)
      const pEl = document.querySelector('#bestRestaurant>p')
      pEl.textContent = `Name: ${bestR[0][0]} Average Salary: ${(bestR[0][1].averageSalary).toFixed(2)} Best Salary: ${(bestS[0][1]).toFixed(2)}`
      const bestStaff = Object.entries(bestR[0][1])
         .slice(0, -1)
         .sort((a, b) => b[1] - a[1])
         .reduce((acc, curr) => {
            return acc += `Name: ${curr[0]} With Salary: ${curr[1]} `
         }, '')
      const pEls = document.querySelector('#workers>p')
      pEls.textContent = bestStaff
   }
}