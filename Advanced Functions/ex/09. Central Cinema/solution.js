function solve() {
    const movieInfo = document.querySelector('#container').children
    const input = Array.from(movieInfo).slice(0, -1)
    const btnOnScreen = Array.from(movieInfo).slice(-1)[0]
    btnOnScreen.addEventListener('click', fillMovie)
    const ulMovie = document.querySelector('#movies>ul')
    const ulArchived = document.querySelector('#archive>ul')
    const clearBtn = document.querySelector('#archive>button')
    clearBtn.addEventListener('click',(e)=>{
        e.target.parentNode.children[1].textContent = ''
    })
    function fillMovie(e) {
        e.preventDefault()
        const name = input[0].value
        const hall = input[1].value
        const price = Number(input[2].value)
        if (!name || !hall || !price) { return; }
        input[0].value = '';
        input[1].value = '';
        input[2].value = '';

        const liEl = document.createElement('li')
        const spanEl = document.createElement('span')
        spanEl.textContent = name
        liEl.appendChild(spanEl)
        const strongEl = document.createElement('strong')
        strongEl.textContent = `Hall: ${hall}`
        liEl.appendChild(strongEl)
        const divEl = document.createElement('div')
        const stEl = document.createElement('strong')
        stEl.textContent = price //.toFixed(2)
        divEl.appendChild(stEl)
        const inputTicketSold = document.createElement('input')
        inputTicketSold.setAttribute('placeholder', 'Tickets Sold')
        divEl.appendChild(inputTicketSold)
        const btnArchive = document.createElement('button')
        btnArchive.textContent = 'Archive'
        btnArchive.addEventListener('click', archiveMovie)
        divEl.appendChild(btnArchive)
        liEl.appendChild(divEl)
        ulMovie.appendChild(liEl)

    }
    function archiveMovie(e) {
        
        const li = e.target.parentNode.parentNode
        const div = e.target.parentNode
        const countTicket = div.children[1]
        if (countTicket.value == '') { return }

        
        const liElem = document.createElement('li')
        
        const spEl = document.createElement('span')
        const nameMovie = li.children[0].textContent
        spEl.textContent = nameMovie
        liElem.appendChild(spEl)

        const strEl = document.createElement('strong')
        const priceMovie = +div.children[0].textContent
        const totalPrice = priceMovie * Number(countTicket.value)
        strEl.textContent = `Total amount: ${totalPrice.toFixed(2)}`
        liElem.appendChild(strEl)

        const btnDel = document.createElement('button')
        btnDel.textContent = 'Delete'
        btnDel.addEventListener('click', (e) => {
            e.target.parentNode.remove()
        })
        liElem.appendChild(btnDel)
        ulArchived.appendChild(liElem)
        li.remove()
    }
}