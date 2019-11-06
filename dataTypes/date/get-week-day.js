//Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день
// недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ»,
// «СБ», «ВС».
// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"
'use strict';

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    //let day = date.getDay();
    let arrDay = ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"];
    return arrDay[date.getDay()];
    // switch (day) {
    //     case 1:
    //         return "ПН";
    //     case 2:
    //         return "ВТ";
    //     case 3:
    //         return "СР";
    //     case 4:
    //         return "ЧТ";
    //     case 5:
    //         return "ПТ";
    //     case 6:
    //         return "СБ";
    //     case 0:
    //         return "ВС";
    // }
}
