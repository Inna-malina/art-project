export function toMoveAccordion() {
  let accordeons = document.querySelectorAll('.accordion-item');
  let closes = document.querySelectorAll('.close-according');
 

  accordeons.forEach(function (accord) {
    accord.addEventListener('click', function (elem) {
    
      let action = elem.target;
      let currentAccordElem = action.closest('.accordion-item');//определяем текущий бокс
      let currentContent = action.nextElementSibling; // находим скрытый контент
      currentAccordElem.classList.toggle("active"); //присваиваем основному контейнеру флаг активности   
      if (currentAccordElem.classList.contains("active")) { 
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
        //Обратить внимание чтоб стили были присвоены классу .accordion-collapse

      }
      else {
        currentContent.style.maxHeight = 0;       
      }
    });
  });


}