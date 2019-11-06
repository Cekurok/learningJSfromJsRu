//Максимальная зарплата
// У нас есть объект salaries с зарплатами:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries),
// которая возвращает имя самого высокооплачиваемого
// сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно
// вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование,
// чтобы перебрать пары ключ/значение.
'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {
    let userName = null;
    let maxSalary = 0;
    for (const [name,salary] of Object.entries(obj)){
        if ( salary > maxSalary){
            maxSalary = salary;
            userName = name;
        }
    }
    return userName;
}

alert(topSalary(salaries));