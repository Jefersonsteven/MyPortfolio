/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var buttonMenu = document.querySelector('.header__button-menu');\nvar openMenu1 = document.querySelector('#openMenu1');\nvar openMenu2 = document.querySelector('#openMenu2');\nvar menu = document.querySelector('.header__menu'); // Event: Click on the menu button\n\nvar isOpen = false;\nbuttonMenu.addEventListener('click', function () {\n  if (!isOpen) {\n    menu.style.display = 'flex';\n    openMenu1.classList.add('open-menu1');\n    openMenu2.classList.add('open-menu2');\n    isOpen = true;\n  } else {\n    menu.style.display = 'none';\n    openMenu1.classList.remove('open-menu1');\n    openMenu2.classList.remove('open-menu2');\n    isOpen = false;\n  }\n}); //\n\nvar aboutMe = document.querySelector('.about-me');\nvar projects = document.querySelector('.projects');\nvar skills = document.querySelector('.skills');\nvar contact = document.querySelector('.contact'); // Event: Click on the option menu\n\nfunction closeMenu(option) {\n  option.addEventListener('click', function () {\n    menu.style.display = 'none';\n    openMenu1.classList.remove('open-menu1');\n    openMenu2.classList.remove('open-menu2');\n    isOpen = false;\n  });\n}\n\ncloseMenu(aboutMe);\ncloseMenu(projects);\ncloseMenu(skills);\ncloseMenu(contact); //\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;