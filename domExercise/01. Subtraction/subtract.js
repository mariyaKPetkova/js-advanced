function subtract() {
    const input = Array.from(document.querySelectorAll('input'))
    let result = document.querySelector('#result')
    const resultSubstract = input.map(el => Number(el.value)).reduce((a, c) => a - c)
    result.textContent = resultSubstract
}