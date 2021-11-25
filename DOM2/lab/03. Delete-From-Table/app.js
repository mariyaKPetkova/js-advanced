function deleteByEmail() {
    const listIt = document.querySelectorAll('tbody tr')
    const input = document.querySelector('input[name="email"]').value
    const resultElement = document.getElementById('result')
    // const res = Array.from(listIt).reduce((acc, curr) => {
    //     //curr.querySelectorAll('td')[1]
    //     if (curr.children[1].textContent === input) {
    //         curr.parentNode.removeChild(curr)
    //         return acc += 1
    //     }
    //     return acc
    // }, 0)
    // res > 0
    //     ? resultElement.textContent = 'Deleted.'
    //     : resultElement.textContent = 'Not found.'
    const res = Array.from(listIt).filter(row => row.children[1].textContent === input)
    if(res.length == 0) return resultElement.textContent = 'Not found.'
        res.forEach(row => row.remove())
        resultElement.textContent = 'Deleted.'
}