import { ObjKeys, keyCode } from "./keys.js";

function clickKeydown(code, keyboardScreen) {
  let keys = document.querySelectorAll(".keyboard__key");
  keys.forEach((item) => {
    if (item.getAttribute("data-code") == code && code == "Backspace") {
      item.classList.add("keyboard__key-active");
      keyboardScreen.innerHTML = keyboardScreen.innerHTML.slice(
        0,
        keyboardScreen.innerHTML.length - 1
      );
    } else if (item.getAttribute("data-code") == code &&  code == "CapsLock") {
      item.classList.toggle("keyboard__key-active");
      if (keys[15].innerHTML == "q") {
        keys.forEach((item) => {
          let str = item.innerHTML;
          if (isCharacterALetter(item) == true && str.length == 1) {
            item.innerHTML = str.toUpperCase();
          }
        });
      } else {
        keys.forEach((item) => {
          let str = item.innerHTML;
          if (isCharacterALetter(item) == true && str.length == 1) {
            item.innerHTML = str.toLowerCase();
          }
        });
      }
    }
    else if(item.getAttribute('data-code') == code &&  code == "ShiftLeft") {
      item.classList.add("keyboard__key-active")
      if((keys[15].innerHTML === 'q')) {
        keys.forEach((item, index) => {
          item.innerHTML = ObjKeys.enShift[index]
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toUpperCase()
          }
        })
      } 
      else if((keys[15].innerHTML === 'Q')) {
        keys.forEach((item, index) => {
          item.innerHTML = ObjKeys.enShift[index]
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toLowerCase()
          }
        })
      }
    }
     else if(item.getAttribute('data-code') == code  &&  code == "Tab") {
      item.classList.add("keyboard__key-active");
    } else if(item.getAttribute('data-code') == code &&  code == "ShiftRight") {
      item.classList.add("keyboard__key-active")
      if((keys[15].innerHTML === 'q')) {
        keys.forEach((item, index) => {
          item.innerHTML = ObjKeys.enShift[index]
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toUpperCase()
          }
        })
      } else if((keys[15].innerHTML === 'Q')) {
        keys.forEach((item, index) => {
          item.innerHTML = ObjKeys.enShift[index]
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toLowerCase()
          }
        })
      }
    }
     else if(item.getAttribute('data-code') == code  &&  code == "Delete") {
      item.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML = ''
    } else if(item.getAttribute('data-code') == code  &&  code == "ControlLeft") {
      item.classList.add("keyboard__key-active")
    } else if(item.getAttribute('data-code') == code &&  code == "ControlRight") {
      item.classList.add("keyboard__key-active")
    } else if(item.getAttribute('data-code') == code  &&  code == "AltLeft") {
      item.classList.add("keyboard__key-active")
    } else if(item.getAttribute('data-code') == code &&  code == "AltRight") {
      item.classList.add("keyboard__key-active")
    } else if(item.getAttribute('data-code') == code  &&  code == "MetaLeft") {
      item.classList.add("keyboard__key-active")
    } else if(item.getAttribute('data-code') == code   &&  code == "Space") {
      item.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML = keyboardScreen.innerHTML + ' '
    }
    else if(item.getAttribute('data-code') == code &&  code == "Enter") {
      item.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML =  `${keyboardScreen.innerHTML} \n`
    }
    else if(item.getAttribute('data-code') == code) {
      item.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML += item.innerHTML;
    }
  });


    
  function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
  }
}


function returnShiftKeyboard(event) {
  let keys = document.querySelectorAll('.keyboard__key');
  if((event  == 'ShiftLeft') ||(event == 'ShiftRight')) {
    if((keys[15].innerHTML === 'q')) {
      keys.forEach((item, index) => {
        item.innerHTML = ObjKeys.en[index]
        let str = item.innerHTML;
        if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
          item.innerHTML = str.toUpperCase()
        }
      })      
    } else if((keys[15].innerHTML === 'Q')) {
      keys.forEach((item, index) => {
        item.innerHTML = ObjKeys.en[index]
        let str = item.innerHTML;
        if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
          item.innerHTML = str.toLowerCase()
        }
      })  
    }
  }
  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
}

export { clickKeydown, returnShiftKeyboard };
