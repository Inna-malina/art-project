export function toMoveFooter() {
  // Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.

  let accordeons = document.querySelectorAll('.footer-accordion-item');

  accordeons.forEach(function (accord) {
    accord.addEventListener('click', function (elem) {
    
      let action = elem.target;
      let currentAccordElem = action.closest('.footer-accordion-item');
      let currentContent = action.nextElementSibling; 
      currentAccordElem.classList.toggle("active"); 
      console.log('sdfgdsfg');
      if (currentAccordElem.classList.contains("active")) { 
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      }
      else {
        currentContent.style.maxHeight = 0;       
      }
    });
  });


}