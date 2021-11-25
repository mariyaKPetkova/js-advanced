function colorize() {
    const row = document.querySelectorAll('table tr')
    return [...row].map((curr, i) => {
        if (i % 2 !== 0) {
            curr.style.backgroundColor = 'teal'
        }
    })
    // [...document.querySelectorAll('table tr:nth-child(even)')]
    //     .map(el => el.style.backgroundColor = 'teal')
}
