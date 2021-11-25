function solve() {
  let firstParam = document.getElementById('text').value
  let secondParam = document.getElementById('naming-convention').value

  let result = firstParam.toLowerCase().split(' ').reduce((acc, curr) => {
    let firstL = curr[0].toUpperCase()
    return acc + '' + firstL + '' + curr.slice(1).toLowerCase()
  }, '');
  let temp2 = document.getElementById('result')
  if (secondParam == 'Camel Case') return temp2.textContent = result[0].toLowerCase() + '' + result.slice(1)
  if (secondParam == 'Pascal Case') return temp2.textContent = result
  return temp2.textContent = `Error!`
}
