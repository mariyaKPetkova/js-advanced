function addItem() {
    const input = Array.from(document.querySelectorAll('input[type=text]'))
    const menu = document.querySelector('#menu')
    const optionEl = document.createElement('option')
    optionEl.textContent = input[0].value
    optionEl.value = input[1].value 
    menu.appendChild(optionEl)
    input[0].value = ''
    input[1].value = ''
}