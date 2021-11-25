function solve() {
    const [name, date] = Array.from(document.querySelectorAll('input'))
    const module = document.querySelector('select')
    const btn = document.querySelector('button')
    const trainings = document.querySelector('.modules')

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == '' || date.value == '' || module.value == 'Select module') return
        const divEl = createElements('div')
        divEl.className = 'module'
        let h3Els = Array.from(document.querySelectorAll('h3'))
        let sameModule = h3Els.find(el => el.textContent == module.value.toUpperCase() + '-MODULE')
        if (sameModule == undefined) {
            const h3 = createElements('h3', module.value.toUpperCase() + '-MODULE')
            divEl.appendChild(h3)
            const ulEl = createElements('ul')
            const liEl = createElements('li')
            liEl.className = 'flex'
            const h4 = createElements('h4', [name.value, date.value])
            const btnDel = createElements('button', 'Del')
            btnDel.className = 'red'
            btnDel.addEventListener('click', (e) => {
                liEl.remove()
                if (Array.from(ulEl).length == 0) {
                    divEl.remove()
                }
            })
            liEl.appendChild(h4)
            liEl.appendChild(btnDel)
            divEl.appendChild(liEl)
            ulEl.appendChild(liEl)
            divEl.appendChild(ulEl)
            trainings.appendChild(divEl)
        } else {
            const ulEl = createElements('ul')
            const liEl = createElements('li')
            liEl.className = 'flex'
            const h4 = createElements('h4', [name.value, date.value])
            const btnDel = createElements('button', 'Del')
            btnDel.className = 'red'
            btnDel.addEventListener('click', (e) => {
                liEl.remove()
                if (Array.from(ulEl).length == 0) {
                    divEl.remove()
                }
            })
            liEl.appendChild(h4)
            liEl.appendChild(btnDel)
            divEl.appendChild(liEl)
            ulEl.appendChild(liEl)
            sameModule.appendChild(ulEl)
        }

    })
    function createElements(type, text) {
        const result = document.createElement(type)
        if (type == 'h4') {
            let [day, hour] = text[1].split('T')
            let date = day.split('-')
            date = date.join('/')
            result.textContent = [text[0], date, hour].join(' - ')
            return result
        }
        if (text) {
            result.textContent = text
        }
        return result
    }
};