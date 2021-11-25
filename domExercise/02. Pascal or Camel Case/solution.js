function solve() {
  const input = Array.from(document.querySelectorAll('input[type=text]')).map(el => el.value)
  const resArea = document.querySelector('#result')
  if (input[1] !== 'Camel Case' && input[1] !== 'Pascal Case') return resArea.textContent = `Error!`
  
  const result = input[0].split(' ').reduce((acc, curr, i) => {
    if (i == 0 && input[1] == 'Camel Case') return acc + curr.toLowerCase()
    let firstL = curr[0].toUpperCase()
    return acc + '' + firstL + '' + curr.slice(1).toLowerCase()
  }, '')
  
  resArea.textContent = result
}