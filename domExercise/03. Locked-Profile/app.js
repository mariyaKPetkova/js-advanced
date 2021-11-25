function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('.profile'))
    profiles.map(profile => {
        const btn = profile.querySelector('button')
        btn.addEventListener('click', (e) => {
            const profile = e.target.parentNode
            const stat = profile.querySelector('input[type=radio]:checked').value
            const hiddenFields = btn.previousElementSibling
            if (stat == 'lock') {
                return
            }
            if (stat == 'unlock') {
                if (btn.textContent == 'Show more') {
                    hiddenFields.style.display = 'block'
                    btn.textContent = 'Hide it'
                } else if (btn.textContent == 'Hide it') {
                    hiddenFields.style.display = 'none'
                    btn.textContent = 'Show more'
                }
            }
        })
    })
}