import  {ObjKeys, keyCode} from './keys.js';

function clickMouseKey(event, keyboardScreen) {
  let keys = document.querySelectorAll('.keyboard__key');
  if(event.classList.contains('keyboard__key')) {
    
    if(event.getAttribute('data-code') == 'CapsLock' ) {
      event.classList.toggle("keyboard__key-active")
      if(keys[15].innerHTML == 'q') {
        keys.forEach((item) => {
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toUpperCase()
          }
        })
      } else {
        keys.forEach((item) => {
          let str = item.innerHTML;
          if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
            item.innerHTML = str.toLowerCase()
          }
        })
      }

    } else if(event.getAttribute('data-code') == 'ShiftLeft') {
      event.classList.add("keyboard__key-active")
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
    } else if(event.getAttribute('data-code') == 'Tab') {
      event.classList.add("keyboard__key-active");
    } else if(event.getAttribute('data-code') == 'ShiftRight') {
      event.classList.add("keyboard__key-active")
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
    } else if(event.getAttribute('data-code') == 'Backspace') {
      event.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML = keyboardScreen.innerHTML.slice(0, keyboardScreen.innerHTML.length - 1)
    } else if(event.getAttribute('data-code') == 'Delete') {
      event.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML = ''
    } else if(event.getAttribute('data-code') == 'ControlLeft') {
      event.classList.add("keyboard__key-active")
    } else if(event.getAttribute('data-code') == 'ControlRight') {
      event.classList.add("keyboard__key-active")
    } else if(event.getAttribute('data-code') == 'AltLeft') {
      event.classList.add("keyboard__key-active")
    } else if(event.getAttribute('data-code') == 'AltRight') {
      event.classList.add("keyboard__key-active")
    } else if(event.getAttribute('data-code') == 'MetaLeft') {
      event.classList.add("keyboard__key-active")
    } else if(event.getAttribute('data-code') == 'Space') {
      keyboardScreen.innerHTML = keyboardScreen.innerHTML + ' '
    }
    else if(event.getAttribute('data-code') == 'Enter') {
      event.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML =  `${keyboardScreen.innerHTML} \n` 
    }
    else {
      event.classList.add("keyboard__key-active")
      keyboardScreen.innerHTML += event.innerHTML;
    }
  }

  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }
}

function mouseupKey(keys) {
  keys.forEach(element => {
    if(element.getAttribute('data-code') != 'CapsLock') {
      element.classList.remove('keyboard__key-active')
    }
  });
}

function returnShift(event) {
  let keys = document.querySelectorAll('.keyboard__key');
  if((event.target.getAttribute('data-code') == 'ShiftLeft') || (event.target.getAttribute('data-code') == 'ShiftRight')) {
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
export {clickMouseKey, mouseupKey, returnShift}