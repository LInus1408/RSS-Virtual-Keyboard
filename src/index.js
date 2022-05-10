import "./styles.scss";
import  {getKeyboard} from './scripts/getKeyboard.js';
import  {ObjKeys, keyCode} from './scripts/keys.js';
import  {clickMouseKey, mouseupKey, returnShift} from './scripts/event_key'

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
