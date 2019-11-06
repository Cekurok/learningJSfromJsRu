//Сколько сегодня прошло секунд?
// Напишите функцию getSecondsToday(),
// возвращающую количество секунд с начала сегодняшнего дня.
//
// Например, если сейчас 10:00, и не было перехода на
// зимнее/летнее время, то:
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день,
// т.е. в ней не должно быть конкретного значения
// сегодняшней даты.
'use strict';

function getSecondsToday() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    //dateCopy.setDate(date.getDate() - days);
    let difference = dateNow - dateToday;
    console.log(dateToday);
    console.log(dateNow);
    return Math.round(difference / 1000);
}
console.log(getSecondsToday());