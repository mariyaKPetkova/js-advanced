function addItem() {
    const text = document.querySelector('input[type=text]')
    let liEl = document.createElement('li')
    liEl.textContent = text.value
    let ulEl = document.querySelector('#items')
    ulEl.appendChild(liEl)
    text.value = ''
}