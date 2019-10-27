// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
// иначе false.
// //     Должно работать так:
// //     let schedule = {};
// //
// // alert( isEmpty(schedule) ); // true
// //
// // schedule["8:30"] = "get up";
// //
// // alert( isEmpty(schedule) ); // false

"use strict";

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule));

schedule.name = "Test";

console.log(isEmpty(schedule));

delete schedule.name;
console.log(isEmpty(schedule));



