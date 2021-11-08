/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth_1lesson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth_1lesson */ \"./src/modules/auth_1lesson.js\");\n/* harmony import */ var _modules_menu3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu3 */ \"./src/modules/menu3.js\");\n\r\n\r\n\r\n(0,_modules_auth_1lesson__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu3__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUM7QUFDUDtBQUNsQztBQUNBLGlFQUFJO0FBQ0osMkRBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aF8xbGVzc29uXCJcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51M1wiXHJcblxyXG5hdXRoKClcclxubWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth_1lesson.js":
/*!*************************************!*\
  !*** ./src/modules/auth_1lesson.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth')\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const closeAuth = document.querySelector('.close-auth')\r\n    const logInForm = document.querySelector('#logInForm')\r\n    const userName = document.querySelector('.user-name')\r\n    const buttonOut = document.querySelector('.button-out')\r\n    const userPizza = {}\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.setProperty('display', 'flex')\r\n    })\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.setProperty('display', 'none')\r\n    })\r\n\r\n    logInForm.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n        const loginUser = document.querySelector('#login')\r\n        const passwordUser = document.querySelector('#password')\r\n        if (loginUser.value.length > 1) {\r\n            userPizza.name = loginUser.value\r\n            userPizza.password = passwordUser.value\r\n            login(userPizza)\r\n        } else {\r\n        alert(\"Логин не введен!\")\r\n    }\r\n\r\n\r\n\r\n    })\r\n\r\nconst login = (user) => {\r\n\r\n    modalAuth.style.setProperty('display', 'none')\r\n    buttonAuth.style.setProperty(\"display\", \"none\")\r\n    buttonOut.style.setProperty(\"display\", \"flex\")\r\n    userName.textContent = user.name\r\n    userName.style.setProperty(\"display\", \"flex\")\r\n    console.log(user)\r\n    localStorage.setItem(\"user\", JSON.stringify(user))\r\n}\r\n\r\nbuttonOut.addEventListener(\"click\", () => {\r\n    logout()\r\n})\r\n\r\n\r\nconst logout = () => {\r\n    userName.textContent = \"\"\r\n    userName.style.setProperty(\"display\", \"none\")\r\n    buttonAuth.style.setProperty(\"display\", \"flex\")\r\n    buttonOut.style.setProperty(\"display\", \"none\")\r\n    localStorage.removeItem('user')\r\n}\r\n\r\nif (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem('user')))\r\n}\r\n\r\n\r\n    // part 2\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoXzFsZXNzb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL21vZHVsZXMvYXV0aF8xbGVzc29uLmpzPzRlM2IiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKVxyXG4gICAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKVxyXG4gICAgY29uc3QgY2xvc2VBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKVxyXG4gICAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ0luRm9ybScpXHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKVxyXG4gICAgY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKVxyXG4gICAgY29uc3QgdXNlclBpenphID0ge31cclxuICAgIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ2ZsZXgnKVxyXG4gICAgfSlcclxuICAgIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXHJcbiAgICB9KVxyXG5cclxuICAgIGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgbG9naW5Vc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luJylcclxuICAgICAgICBjb25zdCBwYXNzd29yZFVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKVxyXG4gICAgICAgIGlmIChsb2dpblVzZXIudmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB1c2VyUGl6emEubmFtZSA9IGxvZ2luVXNlci52YWx1ZVxyXG4gICAgICAgICAgICB1c2VyUGl6emEucGFzc3dvcmQgPSBwYXNzd29yZFVzZXIudmFsdWVcclxuICAgICAgICAgICAgbG9naW4odXNlclBpenphKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCLQm9C+0LPQuNC9INC90LUg0LLQstC10LTQtdC9IVwiKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuXHJcbmNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuXHJcbiAgICBtb2RhbEF1dGguc3R5bGUuc2V0UHJvcGVydHkoJ2Rpc3BsYXknLCAnbm9uZScpXHJcbiAgICBidXR0b25BdXRoLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIilcclxuICAgIGJ1dHRvbk91dC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJmbGV4XCIpXHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubmFtZVxyXG4gICAgdXNlck5hbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiZmxleFwiKVxyXG4gICAgY29uc29sZS5sb2codXNlcilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxufVxyXG5cclxuYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gXCJcIlxyXG4gICAgdXNlck5hbWUuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJmbGV4XCIpXHJcbiAgICBidXR0b25PdXQuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG59XHJcblxyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKVxyXG59XHJcblxyXG5cclxuICAgIC8vIHBhcnQgMlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth_1lesson.js\n");

/***/ }),

/***/ "./src/modules/menu3.js":
/*!******************************!*\
  !*** ./src/modules/menu3.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = ()=> {\r\n    \r\n// Part 3\r\n\r\nconst changeTtile = ({kitchen, name, price})=> {\r\n    const restaurantTitle = document.querySelector('.restaurant-title')\r\n    const priceTitle = document.querySelector('.price')\r\n    const categoryTitle = document.querySelector('.category')\r\n\r\n    restaurantTitle.textContent=name\r\n    priceTitle.textContent=price\r\n    categoryTitle.textContent=kitchen\r\n\r\n    }\r\n\r\nif(localStorage.getItem('restorant')) {\r\n    \r\n    const {image, kitchen, name, price, products, stars, time_of_delivery} = JSON.parse(localStorage.getItem('restorant'))\r\n    changeTtile({kitchen, name, price})\r\n\r\n\r\n\r\n    fetch(`./db/${products}`).then(res=>res.json())\r\n    .then(data=>renderItems(data)\r\n    )\r\n    .catch(error=>{\r\n        console.log(error)\r\n    })\r\n} else {\r\n    window.location.href=\"/\"\r\n}\r\n\r\n\r\n\r\n// const renderItems = (data)=> {\r\n//     data.forEach(element => {\r\n//         console.log(element)\r\n//     });\r\n// }\r\n\r\n// change variable restorant for example tanuki and show it how result\r\n\r\n\r\n// go to the firebase https://console.firebase.google.com/\r\n// create new projest and go to the realtime database -> create database -> start in test mode. Now DB is created and click 3 dots import and select db.json in our computer\r\n// in the end we have a link with our db https://pizza-test-f5cf0-default-rtdb.firebaseio.com/\r\n\r\n\r\n//Part 3\r\n\r\nconst cardsMenu = document.querySelector('.cards-menu')\r\n\r\nconst renderItems = (data)=> {\r\n    data.forEach(element => {\r\n        const {description, id, image, name, price} = element\r\n        console.log(element)\r\n      const card = document.createElement('div')\r\n      card.classList.add('card')\r\n     card.innerHTML= `\r\n     <img src=\"${image}\" alt=\"image\" class=\"card-image\" />\r\n     <div class=\"card-text\">\r\n         <div class=\"card-heading\">\r\n             <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n         </div>\r\n         <!-- /.card-heading -->\r\n         <div class=\"card-info\">\r\n             <div class=\"ingredients\">${description}\r\n             </div>\r\n         </div>\r\n         <!-- /.card-info -->\r\n         <div class=\"card-buttons\">\r\n             <button class=\"button button-primary button-add-cart\">\r\n                 <span class=\"button-card-text\">В корзину</span>\r\n                 <span class=\"button-cart-svg\"></span>\r\n             </button>\r\n             <strong class=\"card-price-bold\">${price} грн.</strong>\r\n         </div>\r\n     </div>\r\n     \r\n     \r\n     `\r\n     cardsMenu.append(card)\r\n    });\r\n}\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51My5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0VBQWdFO0FBQzNFLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvbW9kdWxlcy9tZW51My5qcz9jYzAwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKT0+IHtcclxuICAgIFxyXG4vLyBQYXJ0IDNcclxuXHJcbmNvbnN0IGNoYW5nZVR0aWxlID0gKHtraXRjaGVuLCBuYW1lLCBwcmljZX0pPT4ge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtdGl0bGUnKVxyXG4gICAgY29uc3QgcHJpY2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpXHJcbiAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5JylcclxuXHJcbiAgICByZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQ9bmFtZVxyXG4gICAgcHJpY2VUaXRsZS50ZXh0Q29udGVudD1wcmljZVxyXG4gICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudD1raXRjaGVuXHJcblxyXG4gICAgfVxyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RvcmFudCcpKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHtpbWFnZSwga2l0Y2hlbiwgbmFtZSwgcHJpY2UsIHByb2R1Y3RzLCBzdGFycywgdGltZV9vZl9kZWxpdmVyeX0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0b3JhbnQnKSlcclxuICAgIGNoYW5nZVR0aWxlKHtraXRjaGVuLCBuYW1lLCBwcmljZX0pXHJcblxyXG5cclxuXHJcbiAgICBmZXRjaChgLi9kYi8ke3Byb2R1Y3RzfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YT0+cmVuZGVySXRlbXMoZGF0YSlcclxuICAgIClcclxuICAgIC5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSlcclxufSBlbHNlIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwiL1wiXHJcbn1cclxuXHJcblxyXG5cclxuLy8gY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSk9PiB7XHJcbi8vICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBjaGFuZ2UgdmFyaWFibGUgcmVzdG9yYW50IGZvciBleGFtcGxlIHRhbnVraSBhbmQgc2hvdyBpdCBob3cgcmVzdWx0XHJcblxyXG5cclxuLy8gZ28gdG8gdGhlIGZpcmViYXNlIGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tL1xyXG4vLyBjcmVhdGUgbmV3IHByb2plc3QgYW5kIGdvIHRvIHRoZSByZWFsdGltZSBkYXRhYmFzZSAtPiBjcmVhdGUgZGF0YWJhc2UgLT4gc3RhcnQgaW4gdGVzdCBtb2RlLiBOb3cgREIgaXMgY3JlYXRlZCBhbmQgY2xpY2sgMyBkb3RzIGltcG9ydCBhbmQgc2VsZWN0IGRiLmpzb24gaW4gb3VyIGNvbXB1dGVyXHJcbi8vIGluIHRoZSBlbmQgd2UgaGF2ZSBhIGxpbmsgd2l0aCBvdXIgZGIgaHR0cHM6Ly9waXp6YS10ZXN0LWY1Y2YwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9cclxuXHJcblxyXG4vL1BhcnQgM1xyXG5cclxuY29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKVxyXG5cclxuY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSk9PiB7XHJcbiAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc3Qge2Rlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlfSA9IGVsZW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxyXG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcclxuICAgICBjYXJkLmlubmVySFRNTD0gYFxyXG4gICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJpbWFnZVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XHJcbiAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcmVnXCI+JHtuYW1lfTwvaDM+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8IS0tIC8uY2FyZC1oZWFkaW5nIC0tPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj4ke2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8IS0tIC8uY2FyZC1pbmZvIC0tPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1hZGQtY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g0LPRgNC9Ljwvc3Ryb25nPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgICBcclxuICAgICBgXHJcbiAgICAgY2FyZHNNZW51LmFwcGVuZChjYXJkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu3.js\n");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;