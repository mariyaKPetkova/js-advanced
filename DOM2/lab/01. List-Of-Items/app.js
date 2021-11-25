function addItem() {
    const inputElement = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = inputElement;
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}