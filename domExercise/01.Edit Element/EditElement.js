function editElement(htmlRef, match, replacer) {
    while (htmlRef.textContent.includes(match)) {
        let result = htmlRef.textContent.replace(match, replacer);
        htmlRef.textContent = result;
    }
}