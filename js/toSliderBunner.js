export function toSliderBunner() {
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
};

