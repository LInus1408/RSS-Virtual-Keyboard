import "./styles.scss";
import  {getKeyboard} from './scripts/getKeyboard.js';
import  {clickMouseKey, mouseupKey, returnShift} from './scripts/event_key'
import  {clickKeydown, returnShiftKeyboard} from './scripts/event_keyboard'
import  {changeLang} from './scripts/changeLang'

getKeyboard()
const keyboard = document.querySelector('.keyboard');
const keyboardScreen = document.querySelector('.keyboard-Screen')
const keys = document.querySelectorAll('.keyboard__key');



keyboard.addEventListener('mousedown', (event) => {
 
  clickMouseKey(event.target, keyboardScreen)
})

keyboard.addEventListener('mouseup', (event) => {
  returnShift(event) 
  mouseupKey(keys)
})

let arrayKeys = [];

document.addEventListener('keydown', function(event) {
  if (event.code == 'ControlLeft' || event.code == 'AltLeft') {
    arrayKeys.push(1)
  } else {
    arrayKeys.length = [];
  }
  if(arrayKeys.length == 2) {
    changeLang([keys[15].innerHTML], keys, arrayKeys)
  }
  clickKeydown(event.code, keyboardScreen)
});

document.addEventListener('keyup', (event) => {
  returnShiftKeyboard(event.code) 
  mouseupKey(keys)
})

