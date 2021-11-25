function editElement(ref,match,replacer) {
    const  matc = new RegExp (match , 'g')
    ref.textContent = ref.textContent.replace(matc,replacer)

}
editElement()
