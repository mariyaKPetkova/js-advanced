function sumTable() {
    return Array.from(document.querySelectorAll('table tr')).reduce((a, c, i) => {
        if (i == 0) return a
        if (c.children[0].textContent == 'Total:') {
            c.children[1].textContent = a
            return a
        }
        return a += Number(c.children[1].textContent)
    }, 0).toFixed(2)
}