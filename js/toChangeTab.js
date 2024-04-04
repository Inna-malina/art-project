import infoList from "./infoList";

export function toChangeTab() {
  //Функция табов
  let navElements = document.querySelectorAll('.nav-tab');
  let tabImgContainer = document.querySelector('.tab-images__container img');
  let tabImg_1 = document.querySelector('.tab-img-1 img');
  let tabImg_2 = document.querySelector('.tab-img-2 img');
  let tabImg_3 = document.querySelector('.tab-img-3 img');
  let tabImg_4 = document.querySelector('.tab-img-4 img');
  let tabText_1 = document.querySelector('.tab-text-1');
  let tabText_2 = document.querySelector('.tab-text-2');
  let tabText_3 = document.querySelector('.tab-text-3');
  let tabText_4 = document.querySelector('.tab-text-4');
  
  navElements.forEach(function (navElem) {  
    navElem.addEventListener('click', function (event) {
      let action = event.target;
      disabledNav(navElements)
      action.classList.add('active-nav'); 
      let elementNav = infoList[action.dataset.nav];
      let info = Object.values(elementNav);
      tabImgContainer.src = info[0];
      tabImg_1.src = info[1];
      tabImg_2.src = info[3];
      tabImg_3.src = info[5];
      tabImg_4.src = info[7];
      tabText_1.textContent = info[2];
      tabText_2.textContent = info[4];
      tabText_3.textContent = info[6];
      tabText_4.textContent = info[8];
    });

  });

//Сброс стилей у неактивных табов при клике
  function disabledNav(blocks) {
    blocks.forEach(function (el) {
      el.classList.remove('active-nav');
    });
  }


}