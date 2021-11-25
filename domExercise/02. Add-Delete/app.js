function addItem() {
    const input = document.querySelector('input[type=text]')
    let liEl = document.createElement('li')
    let ulEl = document.querySelector('#items')
    liEl.textContent = input.value
    const btn = document.createElement('a')
    //btn.setAttribute('href','#')
    btn.textContent = '[Delete]'
    btn.addEventListener('click', (e)=>{
        e.target.parentNode.remove()
    })
    liEl.appendChild(btn)
    ulEl.appendChild(liEl)
    input.value = '';
}