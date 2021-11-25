function search() {
   const input = document.querySelector('input[type=text]')
   const liEls = Array.from(document.querySelectorAll('#towns>li'))
   const result = liEls.reduce((acc,curr) => {
      if(curr.textContent.includes(input.value)){
         curr.style.fontWeight = 'bold'
         curr.style.textDecoration = 'underline'
         return acc+=1
      }
      return acc
   },0)
   const divRes = document.querySelector('#result')
   divRes.textContent = `${result} matches found`
}