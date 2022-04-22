
let burger = document.body.querySelector('.header__burger');
let menu = document.body.querySelector('.header__menu');
let overlay = document.body.querySelector('.overlay');
let logo = document.body.querySelector('.header__logo');
burger.addEventListener('click', function(){
	menu.classList.toggle('open');
    burger.classList.toggle('active');
    overlay.classList.toggle('dark-overlay');
    logo.classList.toggle('logo-menu');
    document.body.classList.toggle('not-scroll');
});

let closeBurger = function() {
    menu.classList.remove('open');
    burger.classList.remove('active');
    overlay.classList.remove('dark-overlay');
    document.body.classList.remove('not-scroll');
    logo.classList.remove('logo-menu');
}
overlay.addEventListener('click', closeBurger);

let nodeList = document.body.querySelectorAll('.menu__item'),
    menuItems = Array.from(nodeList);

for (let i = 0; i <= menuItems.length; i++) {
    menuItems[i].addEventListener('click', closeBurger);
}

/*-------------------------------------------slider--------------------------------------------------*/


let prevSliderButton = document.body.querySelector('.arrow-prev');
let nextSliderButton = document.body.querySelector('.arrow-next');
let ourFriendCards = document.body.querySelector('.our-friends__cards');

prevSliderButton.addEventListener('click', function(){

});

nextSliderButton.addEventListener('click', function(){

});




