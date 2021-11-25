function solve() {
  const textAreas = document.querySelectorAll('textarea')
  const btns = document.querySelectorAll('button')
  const body = document.querySelector('tbody')
  btns[0].addEventListener('click', function(ev){
    const arr = JSON.parse(textAreas[0].value)
  
    const genProd = arr.map(el =>{
      // function createElement(type,textContent,attribute){
      //   document.createElement(type)
      //   return el
      // }
      const row = document.createElement('tr');

      const cellsImage = document.createElement('td');
      const image = document.createElement('img');
      image.setAttribute('src', el.img);
      cellsImage.appendChild(image);

      const cellsName = document.createElement('td')
      const pName = document.createElement('p')
      pName.textContent = el.name
      cellsName.appendChild(pName)

      const cellsPrice = document.createElement('td')
      const pPrice = document.createElement('p')
      pPrice.textContent = Number(el.price)
      cellsPrice.appendChild(pPrice)

      const cellsDecFactor = document.createElement('td')
      const pDecFactor = document.createElement('p')
      pDecFactor.textContent = el.decFactor
      cellsDecFactor.appendChild(pDecFactor)

      const cellsInp = document.createElement('td')
      const input = document.createElement('input')
      input.setAttribute('type','checkbox')
      cellsInp.appendChild(input)

      row.appendChild(cellsImage)
      row.appendChild(cellsName)
      row.appendChild(cellsPrice)
      row.appendChild(cellsDecFactor)
      row.appendChild(cellsInp)

      body.appendChild(row)
    })
    
  })
  btns[1].addEventListener('click', function(ev){
    const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
    .map(input => input.parentNode.parentNode)

  const result = furniture.reduce((acc,curr) =>{
const cells = curr.children
const name = cells[1].children[0].textContent
acc.bought.push(name)
const price = Number(cells[2].children[0].textContent)
acc.totalPrice += price
const decF = Number(cells[3].children[0].textContent)
acc.decFactor += decF
return acc
  }, {
    bought:[],
    totalPrice:0,
    decFactor:0
  })
  const decF = result.decFactor / result.bought.length
  textAreas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${decF}`
  })
}