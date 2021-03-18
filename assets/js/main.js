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

Ellipsis({
    lines: 3,
    break_word: false
});

$(document).ready(function () {
    $('.main-news__slider').slick();
    $('.partners__slider').slick({
        slidesToShow: 4,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});