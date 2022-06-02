const showMenu = document.querySelector('.nav__toggle');
const closeMenu = document.querySelector('.nav__close');
const navMenu = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');

showMenu.addEventListener('click', () => {
    navMenu.classList.add('active__menu')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active__menu')
})

navLink.forEach((a) => {
    a.addEventListener('click', () => {
        navMenu.classList.remove('active__menu')
    })
})