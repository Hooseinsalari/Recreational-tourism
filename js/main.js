const showMenu = document.querySelector('.nav__toggle');
const closeMenu = document.querySelector('.nav__close');
const navMenu = document.querySelector('.nav__menu');
const navLink = document.querySelectorAll('.nav__link');
const navbar = document.querySelector('.nav');

// hamburger menu
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

// change nav color while scroll

window.onscroll = function() {
    if(document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
}
