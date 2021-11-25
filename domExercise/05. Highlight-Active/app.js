function focused() {
    const divEls = Array.from(document.querySelectorAll('div>div'))
    divEls.forEach(element => {
        element.children[1].addEventListener('focus', (e)=>{
            element.setAttribute('class','focused')
        })
        element.children[1].addEventListener('blur', (e)=>{
            element.removeAttribute('class','focused')
        })
    });
}