/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
//=======================================================Конвертер webp====================================================
function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

isWebp();


/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMobMenu: () => (/* binding */ getMobMenu)
/* harmony export */ });
//   ===================================================Бургер меню=======================================================
function getMobMenu() {
    let burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    let exitBurgerMenuBTN = document.querySelector('.burger-menu-wrap-exit');
    let burgerMenu = document.querySelector('.burger-menu');
    let menu = document.querySelector('.nav_box-mob');
    let navLinks = document.querySelectorAll('.nav__link');
    let body = document.querySelector('body');

    burgerMenuBTN.addEventListener('click', openMenu);
    exitBurgerMenuBTN.addEventListener('click', closeMenu);

    function openMenu() {
        //если меню открыто
        if (menu.className == "nav_box-mob active") {
            body.style.cssText = `overflow: auto`;
            menu.classList.remove('active')
            burgerMenu.classList.remove('active')
            //если меню закрыто
        } else {
            body.style.cssText = `overflow: hidden`;
            menu.classList.add('active')
            burgerMenu.classList.add('active')
        };
        //отключение мобильного меню при клике по элементу меню
        navLinks.forEach(el => {
            el.addEventListener("click", () => {
                menu.classList.remove('active');
                burgerMenu.classList.remove('active');
                body.style.cssText = `overflow: auto`;
            });
        });
    }

    function closeMenu() {
        menu.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.style.cssText = `overflow: auto`;
    }

}
getMobMenu()


/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnUnderline: () => (/* binding */ btnUnderline)
/* harmony export */ });
function btnUnderline() {
    let btns = document.querySelectorAll("._btn-underline-js");

    btns.forEach(el => {
        let text = el.innerText;
        el.innerHTML = "";
        el.insertAdjacentHTML("beforeend", `
        <span class = "_underline-js">${text}</span>
        `);
    })
}
btnUnderline()

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   titleFonts: () => (/* binding */ titleFonts)
/* harmony export */ });
function titleFonts() {
    let titles = document.querySelectorAll("._fonts-js");

    titles.forEach(el => {
        let title = el.innerText.split(" ");
        let firstWord = title[0];
        let lastWord = title[title.length - 1];
        let letters = '';
        let firstLetter = firstWord[0];
        let lastLetter = lastWord[lastWord.length - 1];
        let finishTitle = '';

        //вырезать буквы
        letters = el.innerText.split("");
        letters.pop();
        letters.shift();
        finishTitle = letters.join("")

        //возвращаем заголовок без первой и последней буквы
        el.innerText = finishTitle;

        //добавляем первую и последнюю буквы
        el.insertAdjacentHTML("afterbegin", `
<span class = "ceremonious">${firstLetter}</span>
        `);

        el.insertAdjacentHTML("beforeend", `
<span class = "ceremonious">
        ${lastLetter}
</span>
        `);
        console.log(finishTitle)
    })
}
titleFonts()

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItemArrow: () => (/* binding */ menuItemArrow)
/* harmony export */ });
function menuItemArrow() {
    let items = document.querySelectorAll(".nav-item");
    let items_lv2 = document.querySelectorAll(".nav-item-lv-2");

    items.forEach(item => {
        let elements = [];
        elements = [...item.children];
        elements.forEach(el => {
            let firstEl = el.className.split(" ")[0];
            if (firstEl == "nav-2lv") {
                let parent = el.parentElement;
                parent.classList.add("_arrow-js")
            }
        })
    })

    items_lv2.forEach(item => {
        let elements = [];
        elements = [...item.children];
        elements.forEach(el => {
            let firstEl = el.className.split(" ")[0];
            if (firstEl == "nav-3lv") {
                let parent = el.parentElement;
                parent.classList.add("_arrow-90deg-js")

                //дополнительно убираю радиус
                let parentBlock = parent.parentElement;
                parentBlock.style.cssText = `border-radius: 10px 0px 0px 10px;`;
            }
        })
    })
}
menuItemArrow()

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fixedHeader: () => (/* binding */ fixedHeader)
/* harmony export */ });
function fixedHeader() {
    let header = document.querySelector(".header__row_white");
    let itemTop = header.getBoundingClientRect().top;

    window.addEventListener("scroll", getFixedHeader);

    function getFixedHeader() {
        if (pageYOffset > itemTop && pageYOffset > 0) {
            header.style.cssText = `position: fixed; top:0`
        } else if (pageYOffset == 0) {
            header.style.cssText = `position: static;`
            console.log(pageYOffset)
        }
        else {
            header.style.cssText = `position: static;`
        }
    }
}
fixedHeader()

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spoiler: () => (/* binding */ spoiler)
/* harmony export */ });
// ======================================================Спойлер===================================
/*
добавить класс _spoiler-js:
<div class = "_spoiler-js">
<h3>Заголовок спойлера</h3>
<p>Текст спойлера</p>
</div>
*/
function spoiler() {
    const spoilers = document.querySelectorAll("._spoiler-js");
    let titles = [];
    let text = [];
    spoilers.forEach(el => {
        titles.push(el.children[0]);
        text.push(el.children[1]);
    })

    titles.forEach(el => {
        el.classList.add("spoiler-title")
    })

    let height = 0;

    for (let i = 0; i < spoilers.length; i++) {
        titles[i].addEventListener("click", toggleClass);
        height = titles[i].clientHeight;
        spoilers[i].style.cssText = `height: ${height}px;`
    }

    function toggleClass(ev) {
        const title = ev.target;
        const spoiler = ev.target.parentElement;
        const text = ev.target.nextElementSibling;
        text.classList.toggle('active');
        title.classList.toggle('active');
        let lastClass = spoiler.classList.length - 1;
        if (spoiler.classList[lastClass] !== "active") {
            spoiler.classList.add('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler + 0.8;
                if (heightSpoiler >= (title.clientHeight + text.clientHeight)) {
                    clearInterval(count)
                }
            }, 0.1);
        } else if (spoiler.classList[1] === "active") {
            spoiler.classList.remove('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler - 0.8;
                if (heightSpoiler <= title.clientHeight) {
                    clearInterval(count)
                }
            }, 0.1);
        }
    }
}
spoiler()


/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerSpoiler: () => (/* binding */ headerSpoiler)
/* harmony export */ });
// ======================================================Спойлер===================================
/*
добавить класс _spoiler-js:
<div class = "_spoiler-js">
<h3>Заголовок спойлера</h3>
<p>Текст спойлера</p>
</div>
*/
function headerSpoiler() {
    const spoilers = document.querySelectorAll("._header-spoiler-js");
    let titles = [];
    let text = [];
    spoilers.forEach(el => {
        titles.push(el.children[0]);
        text.push(el.children[1]);
    })

    titles.forEach(el => {
        el.classList.add("spoiler-title")
    })

    let height = 0;

    for (let i = 0; i < spoilers.length; i++) {
        titles[i].addEventListener("click", toggleClass);
        height = titles[i].clientHeight;
        spoilers[i].style.cssText = `height: ${height + 11}px;`
    }

    function toggleClass(ev) {
        const title = ev.target;
        const spoiler = ev.target.parentElement;
        const text = ev.target.nextElementSibling;
        text.classList.toggle('active');
        title.classList.toggle('active');
        let lastClass = spoiler.classList.length - 1;
        if (spoiler.classList[lastClass] !== "active") {
            spoiler.classList.add('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler + 0.8;
                if (heightSpoiler >= (title.clientHeight + text.clientHeight)) {
                    clearInterval(count)
                }
            }, 0.1);
        } else if (spoiler.classList[1] === "active") {
            spoiler.classList.remove('active');
            let heightSpoiler = spoiler.clientHeight
            let count = setInterval(function () {
                spoiler.style.cssText = ` height: ${heightSpoiler}px;`;
                heightSpoiler = heightSpoiler - 0.8;
                if (heightSpoiler <= title.clientHeight) {
                    clearInterval(count)
                }
            }, 0.1);
        }
    }
}
headerSpoiler()


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_isWebp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_btnUnderline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_titleFonts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_menuItemArrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_fixedHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_spoiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_headerSpoiler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);






//Слайдер import { swiper } from "./components/slider.js";         
//Модальные окна  import { fancybox } from "./components/fancybox.js";
//Маска для инпутов import { mask } from "./components/mask.js";


//Анимация при скроле import { getAOS } from "./components/aos.js";
//Параллакс эффект import { parallax } from "./components/parallax.js";
//Плавный скрол import { anchorScroll } from "./components/scroll.js";
//Поменять цвет хедера при скроле import { getColorHeader } from "./components/addColorHeader.js";
//Табы при скроле import { tabs } from "./components/tabs.js";










})();

/******/ })()
;