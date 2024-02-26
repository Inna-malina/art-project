// выпадающее меню начало

let navArrow = document.querySelector('.nav-link__arrow');
let dropDownMenu = document.querySelector('.dropdown-menu');

navArrow.addEventListener('click', function (elem) {
  elem.preventDefault();
  dropDownMenu.classList.toggle('dropdown-menu__hidden');
});
// выпадающее меню конец
//==============================
// выезжающее бургер-меню начало
let burgerMenu = document.querySelector('.navbar-burger__img');
let navBarContent = document.querySelector('.navbar-content');
let navClose = document.querySelector('.navbar-close__img '); 

burgerMenu.addEventListener('click', function (elem) {
  elem.preventDefault();
  navBarContent.classList.add('navbar-move');
});
navClose.addEventListener('click', function (elem) {
  elem.preventDefault();
  navBarContent.classList.remove('navbar-move');
});
// выезжающее бургер-меню конец