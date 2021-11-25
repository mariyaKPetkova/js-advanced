function lockedProfile() {
    document.getElementById('main').addEventListener('click', function (ev) {
        if (ev.target.targetName === 'BUTTON') {
            const profile = ev.target.parentNode
            const isLocked = profile
                .querySelector('input[type=radio]:checked').value === 'lock'
            if (isLocked) {
                return;
            }
            let div = profile.querySelector('div')
            let isVisible = div.style.dislpay === 'block'
            div.style.dislpay = isVisible ? 'none' : 'block'
            ev.target.textContent = !isVisible ? 'Hide it' : 'Show more'
        }
    })
}