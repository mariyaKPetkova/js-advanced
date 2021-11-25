function search() {
   let input = document.getElementById('searchText').value
   //let input = document.querySelectior('input').value
   let listItem = document.querySelectorAll('#towns>li')
   let matches = document.getElementById('result')

   let res = [...listItem].reduce((acc,curr)=>{
      if((curr.textContent).toLowerCase().includes(input.toLowerCase())){
         curr.style.fontWeigth = 'bold'
         curr.style.textDecoration = 'underline'
         return [...acc,curr]
      }
      return acc
   },[])
   matches.textContent = `${res.length} matches found`
}
