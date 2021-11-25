function create(words) {
   const output = document.getElementById('content')
   words.map(word => output.appendChild(createArt(word)))
   
   function createArt(text) {
      const pEl = createEl('p', text)
      pEl.style.display = 'none'

      const divEl = createEl('div', pEl)
      divEl.addEventListener('click', () => { pEl.style.display = '' })
      return divEl
   }
   function createEl(type, content) {
      let element = document.createElement(type)
      if (typeof content == 'string') {
         element.textContent = content
      } else {
         element.appendChild(content)
      }
      return element
   }
}