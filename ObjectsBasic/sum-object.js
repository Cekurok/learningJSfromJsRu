// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

"use strict";

function sum(obj) {
    let sum = 0;
    for (let key in obj){
        sum += obj[key];
    }

    return sum;
}

let salaries = {
         John: 100,
         Ann: 160,
         Pete: 130
}

console.log(sum(salaries));

salaries ={};

console.log(sum(salaries));