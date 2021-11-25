function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      const input = document.querySelector('#searchField')
      Array.from(document.querySelectorAll('tbody tr'))
         .map(row => {
            row.className = '';
            Array.from(row.children).filter(el => {
               if (el.textContent.includes(input.value)) { 
                  row.className = 'select';
               }
            })
         })
      input.value = '';
   }
}