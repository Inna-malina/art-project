let navArrow = document.querySelector('.nav-link__arrow');
let dropDownMenu = document.querySelector('.dropdown-menu');

navArrow.addEventListener('click', function (elem) {
  elem.preventDefault();
  dropDownMenu.classList.toggle('dropdown-menu__hidden');
})