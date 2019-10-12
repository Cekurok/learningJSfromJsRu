// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//     let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

"use strict";

let calculator = {
    read() {
        this.number1 = +prompt("Введите число", "0");
        this.number2 = +prompt("Введите число", "0");
    },
    sum() {
        return this.number1 + this.number2;
    },
    mult() {
        return this.number1 * this.number2;
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mult() );