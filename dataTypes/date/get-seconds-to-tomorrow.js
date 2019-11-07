//Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(),
// возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е.
// в ней не должно быть конкретного значения сегодняшней даты.
'use strict';

function getSecondsToTomorrow() {
    let dateNow = new Date();
    let dateToday = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+1);
    //dateCopy.setDate(date.getDate() - days);
    let difference = dateToday - dateNow;
    console.log(dateToday);
    console.log(dateNow);
    return Math.round(difference / 1000);

}