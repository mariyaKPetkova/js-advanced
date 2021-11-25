function addItem() {
    const input = document.getElementById('newItemText')
    const liEl = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#'
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    });
    liEl.appendChild(deleteBtn)

    document.getElementById('items').appendChild(liEl)
    input.value = '';

    function createElement(type, contet) {
        const element = document.createElement(type);
        element.textContent = contet;
        return element
    }
}