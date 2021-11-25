function attachEventsListeners() {
    const mainEl = document.querySelector('main')
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
    mainEl.addEventListener('click', (e) => {
        const divEl = e.target.parentNode
        const n = Number(divEl.children[1].value)
        const tInput = divEl.children[0].textContent
        const convFn = {
            'Days: ': (n) => {
                hours.value = n * 24
                minutes.value = n * 60 * 24
                seconds.value = n * 60 * 60 *24
            },
            'Hours: ': (n) => {
                days.value = n / 24
                minutes.value = n * 60
                seconds.value = n * 60 * 60
            },
            'Minutes: ': (n) => {
                days.value = n / 60 / 24
                hours.value = n / 60
                seconds.value = n * 60
            },
            'Seconds: ': (n) => {
                days.value = n / 24 / 60 / 60
                hours.value = n / 60 / 60
                minutes.value = n / 60
            }
        }
        return convFn[tInput](n)
    })
}