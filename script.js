const body = document.body
const preferredTheme = localStorage.getItem('theme')

if (preferredTheme === 'dark') {
    body.classList.add('dark')
} else if (preferredTheme === '') {
    body.classList.remove('dark')
} else {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
    }
}

function setTheme() {
    body.classList.toggle('dark')
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : '')
}