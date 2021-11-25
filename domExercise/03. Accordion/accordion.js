function toggle() {
    const btn = document.querySelector('.button')
    const text = document.querySelector('#extra')
    btn.textContent = btn.textContent === 'More'? 'Less': 'More'
    text.style.display = text.style.display === 'block'? 'none': 'block'
}