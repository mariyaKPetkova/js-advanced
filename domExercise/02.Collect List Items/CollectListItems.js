function extractText() {
    // const liEls = document.getElementById('items').children
    const liEls = document.getElementsByTagName('li')
    let textArea = document.getElementById('result')
    const resultText = Array.from(liEls).map(el => el.textContent)
    textArea.textContent = resultText.join('\n')
}