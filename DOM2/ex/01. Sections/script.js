function create(words) {
   const content = document.getElementById('content')
   words.map(curr => {
      const divEl = document.createElement('div')
      const pEl = document.createElement('p')
      pEl.textContent = curr
      pEl.style.display = 'none'
      divEl.appendChild(pEl)
      content.appendChild(divEl)
   });
   content.addEventListener('click', function (ev) {
      // if (ev.target.tagName === 'DIV' || ev.target.tagName === 'P') {
      //    const el = ev.target.children[0] || ev.target
      //    el.style.display = 'block'
      // }
      if(ev.target !== ev.currentTarget){
         const el = ev.target.children[0] || ev.target
         const isVisible = el.style.display === 'block';
         el.style.display = isVisible ? 'none' : 'block';
      }
   })
}