function subtract() {
    const firstN = document.getElementById('firstNumber').value
    const secondN = document.getElementById('secondNumber').value
    const result = Number(firstN) - Number(secondN)
    document.getElementById('result').textContent = result
}