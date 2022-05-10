import "./styles.scss";
import  {getKeyboard} from './scripts/getKeyboard.js';
import  {ObjKeys, keyCode} from './scripts/keys.js';
import  {clickMouseKey, mouseupKey, returnShift} from './scripts/event_key'
import  {clickKeydown, returnShiftKeyboard} from './scripts/event_keyboard'

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

document.addEventListener('keydown', function(event) {
  clickKeydown(event.code, keyboardScreen)
});

document.addEventListener('keyup', (event) => {
  returnShiftKeyboard(event.code) 
  mouseupKey(keys)
})



