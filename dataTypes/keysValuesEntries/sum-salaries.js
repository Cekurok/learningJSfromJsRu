//Сумма свойств объекта
// Есть объект salaries с произвольным количеством
// свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая
// возвращает сумму всех зарплат с помощью метода
// Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
// Например:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// alert( sumSalaries(salaries) ); // 650
'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
    return Object.entries(obj).reduce((sum, next) => sum + next, 0);
}

alert( sumSalaries(salaries) );

