import  {ObjKeys} from './keys';


function changeLang(element, keys, arrayKeys) {
  function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

  function isCharacterALetterRu(char) {
    return (/[а-яA-Я]/).test(char)
  }

  if(element == 'q') {
    keys.forEach((item, index) => {
      item.innerHTML = ObjKeys.ru[index];
    })

  } else if(element == 'Q') {
    keys.forEach((item, index) => {
   
      let str = item.innerHTML;
      if(((isCharacterALetter(item)) == true) && (str.length == 1)) {
        item.innerHTML = ObjKeys.ru[index].toUpperCase()
      } else {
        item.innerHTML = ObjKeys.ru[index];
      }
    })
  } else if(element == 'й') {
    keys.forEach((item, index) => {
      item.innerHTML = ObjKeys.en[index];
    })
  } else if(element == 'Й') {
    keys.forEach((item, index) => {
   
      let str = item.innerHTML;
      if(((isCharacterALetterRu(item)) == true) && (str.length == 1)) {
        item.innerHTML = ObjKeys.en[index].toUpperCase()
      } else {
        item.innerHTML = ObjKeys.en[index];
      }
    })
  }



  arrayKeys.length = []
}

export {changeLang}