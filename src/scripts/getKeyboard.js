import  {ObjKeys, keyCode} from './keys.js';

function getKeyboard() {
  const mainTitle = document.createElement('h1');
  mainTitle.className = "mainTitle";
  mainTitle.innerHTML = 'Virtual Keyboard'
  document.body.append(mainTitle);

  const appKeyboard = document.createElement('div');
  appKeyboard.className = "app-keyboard";
  document.body.append(appKeyboard);

  const keyboardScreen = document.createElement('textarea');
  keyboardScreen.className = "keyboard-Screen";
  keyboardScreen.setAttribute('name', 'screen');
  keyboardScreen.setAttribute('rows', 15)
  keyboardScreen.setAttribute('cols', 80)
  appKeyboard.append(keyboardScreen);

  const keyboard = document.createElement('div');
  keyboard.className = "keyboard";
  appKeyboard.append(keyboard);

  for(let i = 1; i <= 5; i++) {
    let keyboardLine = document.createElement('div');
    keyboardLine.className = "keyboard_line";
    keyboard.append(keyboardLine);
    let keysNumbers;
    if(i == 1) {
       keysNumbers = 14;
    } else if(i == 2) {
       keysNumbers = 15;
    } else if(i == 3) {
       keysNumbers = 13;
    } else if(i == 4) {
       keysNumbers = 13;
    } else if(i == 5) {
       keysNumbers = 9;
    }
      for(let j = 0; j < keysNumbers; j++) {
        let key = document.createElement('div');
        key.className = "keyboard__key";
        keyboardLine.append(key);
      }
  }


  const keys = document.querySelectorAll('.keyboard__key');

  keys.forEach((item, index) => {
   item.setAttribute('data-code', `${keyCode.keys[index]}`)
  })
  const descLangSwitch = document.createElement('p');
  descLangSwitch.className = "text-lang";
  descLangSwitch.innerHTML = 'To switch the language combination: left ctrl + alt'
  document.body.append(descLangSwitch);

  keys.forEach((item, index) => {
    item.innerHTML = ObjKeys.en[index]
  })

}
  
  export {getKeyboard}; 



