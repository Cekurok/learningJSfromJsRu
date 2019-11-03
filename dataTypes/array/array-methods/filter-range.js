//Напишите функцию filterRange(arr, a, b), которая
// принимает массив arr, ищет в нём элементы между a и b
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять
// исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)
'use strict';

function filterRange(arr, a, b) {
    // let newArr =[];
    // arr.map(function (item, index, arr) {
    //     if (a <= item && item <= b){
    //       newArr.push(item);
    //     }
    // });
    //
    // return newArr;
   return  arr.filter(item => (a <= item && item <= b));
}



let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
