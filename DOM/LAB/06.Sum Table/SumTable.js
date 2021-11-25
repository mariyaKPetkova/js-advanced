function sumTable() {
    const col = [...document.querySelectorAll('table tr')].slice(1,-1)
    document.getElementById('sum').textContent = col.reduce((acc,curr) =>{
        return acc + Number(curr.lastElementChild.textContent)
    },0)
}