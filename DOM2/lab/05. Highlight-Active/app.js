function focused() {
    const tables = document.querySelectorAll('input')
    Array.from(tables).forEach(i =>{
        i.addEventListener('focus', onFocus)
        i.addEventListener('blur', onBlur)
    })
    function onFocus(ev){
        ev.target.parentNode.className = 'focused'
    }
    function onBlur(ev){
        ev.target.parentNode.className = ''
    }
}