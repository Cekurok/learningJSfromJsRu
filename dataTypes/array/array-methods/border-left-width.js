//Напишите функцию camelize(str), которая преобразует
// строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после
// них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить
// строку на массив символов, потом переделайте всё
// как нужно и методом join соедините обратно.
'use strict';

function camelize(strinIn) {
    let arrayWord = strinIn.split('-');
    let newArray = [];
    arrayWord.forEach(function(elem,index) {
        if (index !== 0) {
            let newWord = elem[0].toUpperCase() + elem.slice(1);
            newArray.push(newWord);
        } else {
            newArray.push(elem);
        }
    });
    return newArray.join('');
    // return str
    //       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    //       .map(
    //         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
    //         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
    //         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    //       )
    //       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'

}

alert(camelize("background-color"));   // == 'backgroundColor';
alert(camelize("list-style-image"));    // == 'listStyleImage';
alert(camelize("-webkit-transition"));    // == 'WebkitTransition';