function colorize() {
    let table = document.querySelectorAll('table tr')
    Array.from(table).map((el, i) => {
        if (i % 2 != 0) {
            el.style.backgroundColor = 'teal'
        }
    })
}