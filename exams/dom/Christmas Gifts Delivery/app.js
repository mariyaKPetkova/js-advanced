function solution() {
    // const input = document.querySelector('input');
    // const addBtn = document.querySelector('button');
    // let [gifts, sent, discarted] = Array.from(document.querySelectorAll('ul'))

    // addBtn.addEventListener('click', () => {
    //     const giftName = input.value;
    //     input.value = '';
    //     const gift = createEls('li', giftName, 'gift');
    //     const sBtn = createEls('button','Send','sendButton')
    //     const disBtn = createEls('button','Discard','discardButton')
    //     sBtn.addEventListener('click', (e)=>{
    //         const name = gift.textContent.slice(0,-11)
    //         gift.remove()
    //         const giftEl = createEls('li',name)
    //         sent.appendChild(giftEl)

    //     })
    //     disBtn.addEventListener('click', (e)=>{
    //         const name = gift.textContent.slice(0,-11)
    //         gift.remove()
    //         const giftEl = createEls('li',name)
    //         discarted.appendChild(giftEl)
    //     })
    //     gift.appendChild(sBtn)
    //     gift.appendChild(disBtn)
    //     gifts.appendChild(gift);
    //     sortList()
    // })

    // function createEls(type, text, clas){
    //     const el = document.createElement(type);
    //     el.textContent = text;
    //     if(clas){
    //         el.className = clas
    //     }
    //     return el
    // }
    // function sortList(){
    //     const sortedGifts = Array.from(gifts.children)
    //     .sort((a,b) => a.textContent.localeCompare(b.textContent))
    //     .map(g => gifts.appendChild(g))
    //     return sortedGifts 
    // }
    const input = document.querySelector('input[type="text"]')
    const btnAdd = document.querySelector('button')
    let [gifts, sent, discard] = document.querySelectorAll('.card ul')


    btnAdd.addEventListener('click', (e) => {
        const gift = input.value
        const liEl = createElements('li', gift, 'gift')
        const btnSend = createElements('button', 'Send', 'sendButton')
        btnSend.addEventListener('click', (e) => {
            const gift = liEl.textContent.slice(0, -11)
            const liElGift = createElements('li', gift, 'gift')
            sent.appendChild(liElGift)
            liEl.remove()
        })
        const btnDisc = createElements('button', 'Discard', 'discardButton')
        btnDisc.addEventListener('click', (e) => {
            const gift = liEl.textContent.slice(0, -11)
            const liElGift = createElements('li', gift, 'gift')
            discard.appendChild(liElGift)
            liEl.remove()
        })
        liEl.appendChild(btnSend)
        liEl.appendChild(btnDisc)
        gifts.appendChild(liEl)
        sortGifts() // sorting!!!
        input.value = ''
    })
    function sortGifts() {
        Array.from(gifts.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .map(g => gifts.appendChild(g))
    }
    function createElements(type, text, classNam) {
        const result = document.createElement(type)
        if (text) {
            result.textContent = text
        }
        if (classNam) {
            result.className = classNam
        }
        return result
    }
}