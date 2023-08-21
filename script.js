

const burgerConteuner = document.querySelector(".conteuner-burger");
const list = document.querySelector('.list');
const textLogo = document.querySelector('.text-logo');
const burger = document.querySelector(".burger");
const body = document.querySelector('body');




burgerConteuner.addEventListener("click", function () {
    burger.classList.toggle("burger-active");
    list.classList.toggle("list-active");
    textLogo.classList.toggle("white");
    body.classList.toggle("body_overflow");
})