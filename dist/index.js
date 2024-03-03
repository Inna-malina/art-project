/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toChangeTab: function() { return /* binding */ toChangeTab; }
/* harmony export */ });
/* harmony import */ var _infoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function toChangeTab() {
  let navElements = document.querySelectorAll('.nav-tab');
  let tabImgContainer = document.querySelector('.tab-images__container img');
  


  navElements.forEach(function (navElem) {
  
    navElem.addEventListener('click', function (event) {
      let action = event.target;
      disabledNav(navElements)
      action.classList.add('active-nav'); 

      let elementNav = _infoList__WEBPACK_IMPORTED_MODULE_0__["default"][action.dataset.nav];
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

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const infoList = {
  "one-nav": {
    "background": "../images/main/simpler/nav-1.png",
    "oneNavImg1": "./images/main/simpler/foto-1.png",
    "one-nav__text-1": "Портрет рисует художник.Детально прорисовывает все части портрета! ",
    "one-nav_img-2": "/images/main/simpler/foto-2.png",
    "one-nav__text-2": "Покрытие Вашей картины защитным акриловым лаком или текстурным гелем. ",
    "one-nav_img-3": "/images/main/simpler/foto-3.png",
    "one-nav__text-3": "Яркость и прочность материалов более 100 лет! Холст сохранит свое натяжение и не провиснет!",
    "one-nav_img-4": "/images/main/simpler/foto-4.png",
    "one-nav__text-4": "Каждая картина упаковывается подарочную бумагу и украшается бантом!",
  },
  "two-nav": {
    "background": "",
    "oneNavImg1": "./images/main/simpler/foto-4.png",
    "one-nav__text-1": "Покрытие Вашей картины защитным акриловым лаком или текстурным гелем.",
    "one-nav_img-2": "/images/main/simpler/foto-3.png",
    "one-nav__text-2": "Яркость и прочность материалов более 100 лет! Холст сохранит свое натяжение и не провиснет!",
    "one-nav_img-3": "/images/main/simpler/foto-2.png",
    "one-nav__text-3": "Каждая картина упаковывается подарочную бумагу и украшается бантом!",
    "one-nav_img-4": "/images/main/simpler/foto-1.png",
    "one-nav__text-4": "Портрет рисует художник.Детально прорисовывает все части портрета!",
  },
  "three-nav": {
    "background": "",
    "oneNavImg1": "",
    "one-nav__text-1": "Яркость и прочность материалов более 100 лет! Холст сохранит свое натяжение и не провиснет!",
    "one-nav_img-2": "",
    "one-nav__text-2": "Каждая картина упаковывается подарочную бумагу и украшается бантом!",
    "one-nav_img-3": "",
    "one-nav__text-3": "Портрет рисует художник.Детально прорисовывает все части портрета!",
    "one-nav_img-4": "",
    "one-nav__text-4": "Покрытие Вашей картины защитным акриловым лаком или текстурным гелем.",  
  },
  "four-nav": {
    "background": "",
    "oneNavImg1": "",
    "one-nav__text-1": "Каждая картина упаковывается подарочную бумагу и украшается бантом!",
    "one-nav_img-2": "",
    "one-nav__text-2": "Портрет рисует художник.Детально прорисовывает все части портрета!",
    "one-nav_img-3": "",
    "one-nav__text-3": "Покрытие Вашей картины защитным акриловым лаком или текстурным гелем.",
    "one-nav_img-4": "",
    "one-nav__text-4": "Яркость и прочность материалов более 100 лет! Холст сохранит свое натяжение и не провиснет!",   
  },
  "five-nav": {
    "background": "",
    "oneNavImg1": "",
    "one-nav__text-1": "Яркость и прочность материалов более 100 лет! Холст сохранит свое натяжение и не провиснет!",
    "one-nav_img-2": "",
    "one-nav__text-2": "Каждая картина упаковывается подарочную бумагу и украшается бантом!",
    "one-nav_img-3": "",
    "one-nav__text-3": "Портрет рисует художник.Детально прорисовывает все части портрета!",
    "one-nav_img-4": "",
    "one-nav__text-4": "Покрытие Вашей картины защитным акриловым лаком или текстурным гелем.",  
  },
}

/* harmony default export */ __webpack_exports__["default"] = (infoList);

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toSliderBunner: function() { return /* binding */ toSliderBunner; }
/* harmony export */ });
function toSliderBunner() {
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



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerMenu: function() { return /* binding */ headerMenu; }
/* harmony export */ });
function headerMenu() {
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
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toChangeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _toSliderBunner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);







(0,_header_menu__WEBPACK_IMPORTED_MODULE_2__.headerMenu)();
(0,_toSliderBunner__WEBPACK_IMPORTED_MODULE_1__.toSliderBunner)();
(0,_toChangeTab__WEBPACK_IMPORTED_MODULE_0__.toChangeTab)();

}();
/******/ })()
;