const openMenuBtn = document.querySelector('.nav__btn--open');
const closeMenuBtn = document.querySelector('.nav__btn--close');
const subMenuBtn = document.querySelectorAll('.nav__btn--submenu');
const subMenu = document.querySelectorAll('.submenu');
const menu = document.querySelector('.nav__inner');

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