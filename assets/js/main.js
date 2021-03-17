const openMenuBtn = document.querySelector('.header__nav-open');
const closeMenuBtn = document.querySelector('.header__nav-close');
const subMenuBtn = document.querySelectorAll('.header__nav-open-submenu');
const subMenu = document.querySelectorAll('.submenu');
const menu = document.querySelector('.header__nav-list-wrapper');

openMenuBtn.addEventListener('click', () => {

    menu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {

    menu.classList.remove('open');
});

subMenuBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        subMenu[index].classList.toggle('open');
    })
});