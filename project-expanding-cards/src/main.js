import './style.css';

const panels = document.querySelectorAll('.panel')
const active = document.querySelector('.active')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (active) panels.forEach(element => element.classList.remove('active'))
        panel.classList.add('active')
    })
})