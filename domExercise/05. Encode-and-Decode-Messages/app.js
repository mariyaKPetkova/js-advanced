function encodeAndDecodeMessages() {
    const textarea = document.querySelectorAll('#main div textarea')
    const btn = document.querySelectorAll('#main div button')

    btn[0].addEventListener('click', () => {
        let str = textarea[0].value
        let codStr = Array.from(str).map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
        textarea[1].value = codStr
        textarea[0].value = ''

        btn[1].addEventListener('click', () => {
            const decodStr = Array.from(codStr).map((char) => String.fromCharCode(char.charCodeAt(0) - 1)).join('')
            textarea[1].value = decodStr
        })
    })
}