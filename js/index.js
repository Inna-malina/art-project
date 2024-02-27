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

//слайдер в баннере начало
let bunners = document.querySelectorAll('.bunner-bg');
let btn_R = document.querySelector('.bunner-arrow__right');
let btn_L = document.querySelector('.bunner-arrow__left');

let count = 0
function slider(){
  for (let n = 0; n < bunners.length; n++) {
    bunners[n].classList.add('bg-disactive');
  } 
  bunners[count].classList.remove('bg-disactive');
  bunners[count].classList.add('bg-active');
}
slider(); 

btn_R.addEventListener('click', function (elem) {
  elem.preventDefault();
  if (count + 1 == bunners.length) {
    count = 0;
  }
  else {
    count++;
  }
  slider();
});

btn_L.addEventListener('click', function (elem) { 
  elem.preventDefault();
  if (count - 1 == -1) {
    count = bunners.length - 1;
  }
  else {
    count--;
  }
  slider();
})



//слайдер в баннере конец