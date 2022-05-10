/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _scripts_getKeyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/getKeyboard.js */ \"./src/scripts/getKeyboard.js\");\n/* harmony import */ var _scripts_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/keys.js */ \"./src/scripts/keys.js\");\n/* harmony import */ var _scripts_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/event_key */ \"./src/scripts/event_key.js\");\n\n\n\n\n(0,_scripts_getKeyboard_js__WEBPACK_IMPORTED_MODULE_1__.getKeyboard)();\nvar keyboard = document.querySelector('.keyboard');\nvar keyboardScreen = document.querySelector('.keyboard-Screen');\nvar keys = document.querySelectorAll('.keyboard__key');\nkeyboard.addEventListener('mousedown', function (event) {\n  (0,_scripts_event_key__WEBPACK_IMPORTED_MODULE_3__.clickMouseKey)(event.target, keyboardScreen);\n});\nkeyboard.addEventListener('mouseup', function (event) {\n  (0,_scripts_event_key__WEBPACK_IMPORTED_MODULE_3__.returnShift)(event);\n  (0,_scripts_event_key__WEBPACK_IMPORTED_MODULE_3__.mouseupKey)(keys);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?")},"./src/scripts/event_key.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clickMouseKey\": () => (/* binding */ clickMouseKey),\n/* harmony export */   \"mouseupKey\": () => (/* binding */ mouseupKey),\n/* harmony export */   \"returnShift\": () => (/* binding */ returnShift)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./src/scripts/keys.js\");\n\n\nfunction clickMouseKey(event, keyboardScreen) {\n  var keys = document.querySelectorAll('.keyboard__key');\n\n  if (event.classList.contains('keyboard__key')) {\n    if (event.getAttribute('data-code') == 'CapsLock') {\n      event.classList.toggle(\"keyboard__key-active\");\n\n      if (keys[15].innerHTML == 'q') {\n        keys.forEach(function (item) {\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toUpperCase();\n          }\n        });\n      } else {\n        keys.forEach(function (item) {\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toLowerCase();\n          }\n        });\n      }\n    } else if (event.getAttribute('data-code') == 'ShiftLeft') {\n      event.classList.add(\"keyboard__key-active\");\n\n      if (keys[15].innerHTML === 'q') {\n        keys.forEach(function (item, index) {\n          item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.enShift[index];\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toUpperCase();\n          }\n        });\n      } else if (keys[15].innerHTML === 'Q') {\n        keys.forEach(function (item, index) {\n          item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.enShift[index];\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toLowerCase();\n          }\n        });\n      }\n    } else if (event.getAttribute('data-code') == 'Tab') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'ShiftRight') {\n      event.classList.add(\"keyboard__key-active\");\n\n      if (keys[15].innerHTML === 'q') {\n        keys.forEach(function (item, index) {\n          item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.enShift[index];\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toUpperCase();\n          }\n        });\n      } else if (keys[15].innerHTML === 'Q') {\n        keys.forEach(function (item, index) {\n          item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.enShift[index];\n          var str = item.innerHTML;\n\n          if (isCharacterALetter(item) == true && str.length == 1) {\n            item.innerHTML = str.toLowerCase();\n          }\n        });\n      }\n    } else if (event.getAttribute('data-code') == 'Backspace') {\n      event.classList.add(\"keyboard__key-active\");\n      keyboardScreen.innerHTML = keyboardScreen.innerHTML.slice(0, keyboardScreen.innerHTML.length - 1);\n    } else if (event.getAttribute('data-code') == 'Delete') {\n      event.classList.add(\"keyboard__key-active\");\n      keyboardScreen.innerHTML = '';\n    } else if (event.getAttribute('data-code') == 'ControlLeft') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'ControlRight') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'AltLeft') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'AltRight') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'MetaLeft') {\n      event.classList.add(\"keyboard__key-active\");\n    } else if (event.getAttribute('data-code') == 'Space') {\n      keyboardScreen.innerHTML = keyboardScreen.innerHTML + ' ';\n    } else if (event.getAttribute('data-code') == 'Enter') {\n      event.classList.add(\"keyboard__key-active\");\n      keyboardScreen.innerHTML = \"\".concat(keyboardScreen.innerHTML, \" \\n\");\n    } else {\n      event.classList.add(\"keyboard__key-active\");\n      keyboardScreen.innerHTML += event.innerHTML;\n    }\n  }\n\n  function isCharacterALetter(_char) {\n    return /[a-zA-Z]/.test(_char);\n  }\n}\n\nfunction mouseupKey(keys) {\n  keys.forEach(function (element) {\n    if (element.getAttribute('data-code') != 'CapsLock') {\n      element.classList.remove('keyboard__key-active');\n    }\n  });\n}\n\nfunction returnShift(event) {\n  var keys = document.querySelectorAll('.keyboard__key');\n\n  if (event.target.getAttribute('data-code') == 'ShiftLeft' || event.target.getAttribute('data-code') == 'ShiftRight') {\n    if (keys[15].innerHTML === 'q') {\n      keys.forEach(function (item, index) {\n        item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.en[index];\n        var str = item.innerHTML;\n\n        if (isCharacterALetter(item) == true && str.length == 1) {\n          item.innerHTML = str.toUpperCase();\n        }\n      });\n    } else if (keys[15].innerHTML === 'Q') {\n      keys.forEach(function (item, index) {\n        item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.en[index];\n        var str = item.innerHTML;\n\n        if (isCharacterALetter(item) == true && str.length == 1) {\n          item.innerHTML = str.toLowerCase();\n        }\n      });\n    }\n  }\n\n  function isCharacterALetter(_char2) {\n    return /[a-zA-Z]/.test(_char2);\n  }\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/event_key.js?")},"./src/scripts/getKeyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getKeyboard\": () => (/* binding */ getKeyboard)\n/* harmony export */ });\n/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keys.js */ \"./src/scripts/keys.js\");\n\n\nfunction getKeyboard() {\n  var mainTitle = document.createElement('h1');\n  mainTitle.className = \"mainTitle\";\n  mainTitle.innerHTML = 'Virtual Keyboard';\n  document.body.append(mainTitle);\n  var appKeyboard = document.createElement('div');\n  appKeyboard.className = \"app-keyboard\";\n  document.body.append(appKeyboard);\n  var keyboardScreen = document.createElement('textarea');\n  keyboardScreen.className = \"keyboard-Screen\";\n  keyboardScreen.setAttribute('name', 'screen');\n  keyboardScreen.setAttribute('rows', 15);\n  keyboardScreen.setAttribute('cols', 80);\n  keyboardScreen.setAttribute('autofocus', '');\n  appKeyboard.append(keyboardScreen);\n  var keyboard = document.createElement('div');\n  keyboard.className = \"keyboard\";\n  appKeyboard.append(keyboard);\n\n  for (var i = 1; i <= 5; i++) {\n    var keyboardLine = document.createElement('div');\n    keyboardLine.className = \"keyboard_line\";\n    keyboard.append(keyboardLine);\n    var keysNumbers = void 0;\n\n    if (i == 1) {\n      keysNumbers = 14;\n    } else if (i == 2) {\n      keysNumbers = 15;\n    } else if (i == 3) {\n      keysNumbers = 13;\n    } else if (i == 4) {\n      keysNumbers = 13;\n    } else if (i == 5) {\n      keysNumbers = 9;\n    }\n\n    for (var j = 0; j < keysNumbers; j++) {\n      var key = document.createElement('div');\n      key.className = \"keyboard__key\";\n      keyboardLine.append(key);\n    }\n  }\n\n  var keys = document.querySelectorAll('.keyboard__key');\n  keys.forEach(function (item, index) {\n    item.setAttribute('data-code', \"\".concat(_keys_js__WEBPACK_IMPORTED_MODULE_0__.keyCode.keys[index]));\n  });\n  var descLangSwitch = document.createElement('p');\n  descLangSwitch.className = \"text-lang\";\n  descLangSwitch.innerHTML = 'To switch the language combination: left ctrl + alt';\n  document.body.append(descLangSwitch);\n  keys.forEach(function (item, index) {\n    item.innerHTML = _keys_js__WEBPACK_IMPORTED_MODULE_0__.ObjKeys.en[index];\n  });\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/getKeyboard.js?")},"./src/scripts/keys.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ObjKeys\": () => (/* binding */ ObjKeys),\n/* harmony export */   \"keyCode\": () => (/* binding */ keyCode)\n/* harmony export */ });\nvar ObjKeys = {\n  en: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#11014;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#11013;', '&#11015;', '\t&#10145;', 'Ctrl'],\n  enShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#11014;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#11013;', '&#11015;', '\t&#10145;', 'Ctrl'],\n  ru: [],\n  ruSHift: []\n};\nvar keyCode = {\n  keys: ['Backquote', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'NumpadDivide', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/keys.js?")},"./src/styles.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();