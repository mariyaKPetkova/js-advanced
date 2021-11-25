function deleteByEmail() {
    const input = document.querySelector('input[type=text]')
    const trEls = Array.from(document.querySelectorAll('tbody tr'))
    const divEl = document.querySelector('#result')
        const filtredTr = trEls.reduce((acc, curr) => {
            if (curr.children[1].textContent == input.value) {
                curr.remove()
                return acc += 1
            }
            return acc
        }, 0)
        filtredTr == 0
            ? divEl.textContent = 'Not found.'
            : divEl.textContent = 'Deleted.'  
}