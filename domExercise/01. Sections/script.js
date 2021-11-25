function create(words) {
   const idContEl = document.getElementById('content')
   words.forEach(element => {
      const divEl = document.createElement('div')
      const pEl = document.createElement('p')
      pEl.textContent = element
      pEl.style.display = 'none'

      divEl.addEventListener('click', () => {
         pEl.style.display = 'block'
      })

      divEl.appendChild(pEl)
      idContEl.appendChild(divEl)
   });
}