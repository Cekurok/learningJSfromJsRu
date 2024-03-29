// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функци
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны",
//     function () { alert("Вы согласились.");},
//     function () { alert("Вы отменили выполнение.");}
// );
'use strict';

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    'Вы согласны' ,
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

