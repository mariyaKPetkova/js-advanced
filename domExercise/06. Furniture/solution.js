function solve() {
  const inputJSON = document.querySelector('#exercise textarea')
  const btnGenerate = document.querySelector('#exercise button')
  const table = document.querySelector('.table tbody')
  btnGenerate.addEventListener('click',()=>{
    const input = JSON.parse(inputJSON.value)
    input.map(product=>{

      const trEl = document.createElement('tr')
      const cellImg = document.createElement('td')
      const pImage = document.createElement('img');
      pImage.setAttribute('src', product.img);
      cellImg.appendChild(pImage)
      trEl.appendChild(cellImg)
      const cellName = document.createElement('td')
      const pName = document.createElement('p')
      pName.textContent = product.name
      cellName.appendChild(pName)
      trEl.appendChild(cellName)
      const cellPr = document.createElement('td')
      const pPrice = document.createElement('p')
      pPrice.textContent = Number(product.price)
      cellPr.appendChild(pPrice)
      trEl.appendChild(cellPr)
      const cellDF = document.createElement('td')
      const pDecFactor = document.createElement('p')
      pDecFactor.textContent = Number(product.decFactor)
      cellDF.appendChild(pDecFactor)
      trEl.appendChild(cellDF)
      const cellsInp = document.createElement('td')
      const input = document.createElement('input')
      input.setAttribute('type','checkbox')
      cellsInp.appendChild(input)
      trEl.appendChild(cellsInp)
      table.appendChild(trEl)
    })
  })
  const btnBuy = document.querySelectorAll('button')[1]
  btnBuy.addEventListener('click', ()=>{
    const boughtProducts = Array.from(document.querySelectorAll('tbody input[type=checkbox]:checked'))
    .reduce((acc,curr,i,arr) => {
      const trEl = curr.parentNode.parentNode
      const furniture = trEl.children[1].children[0].textContent
      const price = Number(trEl.children[2].children[0].textContent)
      const factor = Number(trEl.children[3].children[0].textContent)
      
      acc['Bought furniture'].push(furniture)
      acc['Total price'] += price
      acc['Average decoration factor'] += factor / arr.length
      return acc
    },{
'Bought furniture':[],
'Total price': 0,
'Average decoration factor': 0
    })
    const resultProd = boughtProducts['Bought furniture'].join(', ')
    const price = boughtProducts['Total price'].toFixed(2)
    // const result = Object.entries(boughtProducts).forEach(el=>{
    //   console.log(`${el[0]}: ${el[1]}`);})
    const resultTextarea = document.querySelectorAll('textarea')[1]
    resultTextarea.textContent = `Bought furniture: ${resultProd}\nTotal price: ${price}\nAverage decoration factor: ${boughtProducts['Average decoration factor']}`
  })
}