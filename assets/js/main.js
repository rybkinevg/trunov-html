const openMenuBtn = document.querySelector('.nav__btn--open');
const closeMenuBtn = document.querySelector('.nav__btn--close');
const subMenuBtn = document.querySelectorAll('.nav__btn--submenu');
const subMenu = document.querySelectorAll('.submenu');
const menu = document.querySelector('.nav__inner');
const body = document.querySelector('.body');

openMenuBtn.addEventListener('click', () => {

    menu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {

    menu.classList.remove('open');
});

subMenuBtn.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        $(subMenu[index]).slideToggle(300);
    })
});

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

if (isMobile) {

    body.classList.add('touch');
} else {

    body.classList.add('no-touch');
}

$(document).ready(function () {
    $('.your-class').slick();
});