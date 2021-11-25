function solve() {
   // let input = Array.from(document.querySelectorAll('input[type=text]'))
   // let inputText = document.querySelector('textarea')
   // let postsEl = document.querySelector('.site-content section')
   // let createBtn = document.querySelector('form').lastElementChild
   // let archSection = document.querySelector('.archive-section ol')

   // createBtn.addEventListener('click', (e) => {
   //    e.preventDefault()
   //    let articleEl = document.createElement('article')
   //    let hEl = document.createElement('h1')
   //    hEl.textContent = input[1].value
   //    articleEl.appendChild(hEl)

   //    let pCategoryEl = document.createElement('p')
   //    pCategoryEl.textContent = 'Category:'
   //    let strongCategoryEl = document.createElement('strong')
   //    strongCategoryEl.textContent = input[2].value
   //    pCategoryEl.appendChild(strongCategoryEl)
   //    articleEl.appendChild(pCategoryEl)

   //    let pCreatorEl = document.createElement('p')
   //    pCreatorEl.textContent = 'Creator:'
   //    let strongCreatorEl = document.createElement('strong')
   //    strongCreatorEl.textContent = input[0].value
   //    pCreatorEl.appendChild(strongCreatorEl)
   //    articleEl.appendChild(pCreatorEl)

   //    let pTextEl = document.createElement('p')
   //    pTextEl.textContent = inputText.value
   //    articleEl.appendChild(pTextEl)

   //    let divEl = document.createElement('div')
   //    divEl.setAttribute('class', 'buttons')
   //    let delBtn = document.createElement('button')
   //    delBtn.setAttribute('class', 'btndelete')
   //    delBtn.textContent = 'Delete'
   //    delBtn.addEventListener('click', (e) => {
   //       return articleEl.remove()
   //    })
   //    divEl.appendChild(delBtn)
   //    let archBtn = document.createElement('button')
   //    archBtn.setAttribute('class', 'btnarchive')
   //    archBtn.textContent = 'Archive'
   //    archBtn.addEventListener('click', (e) => {
   //       let liElements = Array.from(document.querySelectorAll('.archive-section ol li'))
   //       const els = liElements.map(el => el.textContent)
   //       liElements.map(el => el.remove())
   //       els.push(hEl.textContent)
   //       let sorted = els.sort((a, b) => a.localeCompare(b))
   //       sorted.map(el => {
   //          let liEl = document.createElement('li')
   //          liEl.textContent = el
   //          archSection.appendChild(liEl)
   //       })
   //       articleEl.remove()
   //    })
   //    divEl.appendChild(archBtn)
   //    articleEl.appendChild(divEl)
   //    postsEl.appendChild(articleEl)
   //    inputText.value = ''
   //    input[0].value = ''
   //    input[1].value = ''
   //    input[2].value = ''
   // })

   const [authorInput, titleInput, categoryInput] = Array.from(document.querySelectorAll('input[type="text"]'))
   const contentInput = Array.from(document.querySelectorAll('textarea[name="content"]'))[0]
   const btnCreate = document.querySelector('button')
   const posts = document.querySelector('main section')
   const archiveOlEl = document.querySelector('ol')
   const archivedEl = Array.from(document.querySelectorAll('ol li'))

   btnCreate.addEventListener('click', (e) => {
      e.preventDefault()

      const articleEl = createElements('article')
      const h1El = createElements('h1', titleInput.value)
      const pElCategory = createElements('p', 'Category:')
      const strElCategory = createElements('strong', categoryInput.value)
      pElCategory.appendChild(strElCategory)
      articleEl.appendChild(h1El)
      articleEl.appendChild(pElCategory)
      const pElCreator = createElements('p', 'Creator:')
      const strElCreator = createElements('strong', authorInput.value)
      pElCreator.appendChild(strElCreator)
      articleEl.appendChild(pElCreator)
      const pElText = createElements('p', contentInput.value)
      articleEl.appendChild(pElText)
      const divEl = createElements('div', undefined, 'buttons')
      const btnDel = createElements('button', 'Delete', 'btn delete')

      btnDel.addEventListener('click', (e) => {
         articleEl.remove()
      })
      const btnArch = createElements('button', 'Archive', 'btn archive')

      btnArch.addEventListener('click', (e) => {
         const archArray = archivedEl.map(el => el.textContent)
         archArray.push(h1El.textContent)
         const sortedArchEls = sortElements(archArray)
         archivedEl.map(el => el.remove())

         sortedArchEls.map(el => {
            const liEl = createElements('li', el)
            archiveOlEl.appendChild(liEl)
            articleEl.remove()
         })
      })

      divEl.appendChild(btnDel)
      divEl.appendChild(btnArch)
      articleEl.appendChild(divEl)
      posts.appendChild(articleEl)
      cleanInput([authorInput, titleInput, categoryInput, contentInput])
   })

   function sortElements(arr) {
      return arr.sort((a, b) => a.localeCompare(b))
   }
   function cleanInput(arr) {
      return arr.map(el => el.value = '')
   }
   function createElements(type, text, classStr) {
      const element = document.createElement(type)
      if (text) {
         element.textContent = text
      }
      if (classStr) {
         element.className = classStr
      }
      return element
   }
}