function solve() {
   const shoppingCart = Array.from(document.querySelectorAll('.product'))
   const textArea = document.querySelector('textarea')
   const result = shoppingCart.reduce((acc, curr) => {
      const prod = curr.children[1].children[0].textContent
      const price = Number(curr.children[3].textContent)
      const btn = curr.children[2].children[0]
      btn.addEventListener('click', (e) => {
         if (!acc[prod]) {
            acc[prod] = 0
         }
         acc[prod] += price
         textArea.textContent += `Added ${prod} for ${(price).toFixed(2)} to the cart.` + '\n'
      })
      return acc
   }, {})
   const btnCheckOut = document.querySelector('.checkout')
   btnCheckOut.addEventListener('click', () => {
      let products = Object.keys(result)
      let totalSum = Object.values(result).reduce((a, c) => a += c, 0)
      textArea.textContent += `You bought ${products.join(', ')} for ${(totalSum).toFixed(2)}.`
   })
}