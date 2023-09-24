document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('header')
  let menu = document.querySelector('#menu-icon')
  let navbar = document.querySelector('.navbar')

  document.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
  })

  let darkmode = document.querySelector('#darkmode')

  darkmode.onclick = () => {
    console.log('ok')
    if (darkmode.classList.contains('bx-moon')) {
      darkmode.classList.replace('bx-moon', 'bx-sun')
      document.body.classList.add('active')
    } else {
      darkmode.classList.replace('bx-sun', 'bx-moon')
      document.body.classList.remove('active')
    }
  }

  menu.addEventListener('click', () => {
    navbar.classList.toggle('active')
  })
})
