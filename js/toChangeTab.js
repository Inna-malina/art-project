import infoList from "./infoList";

export function toChangeTab() {
  let navElements = document.querySelectorAll('.nav-tab');
  let tabImgContainer = document.querySelector('.tab-images__container img');
  


  navElements.forEach(function (navElem) {
  
    navElem.addEventListener('click', function (event) {
      let action = event.target;
      disabledNav(navElements)
      action.classList.add('active-nav'); 

      let elementNav = infoList[action.dataset.nav];
      let info = Object.values(elementNav)[0];
      tabImgContainer.src = info.background;
      
    });

  });




  function disabledNav(blocks) {
    blocks.forEach(function (el) {
      el.classList.remove('active-nav');
    });
  }


}