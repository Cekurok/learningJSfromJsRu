//Хранение времени прочтения
// Есть массив сообщений такой же, как и в
// предыдущем задании.
// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
// Теперь вопрос стоит так: какую структуру данных вы бы
// предложили использовать для хранения информации о том,
// когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только
// факт прочтения «да или нет». Теперь же нам нужно
// сохранить дату, и она должна исчезнуть из памяти при
// удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты
// встроенного класса Date, которые мы разберём позднее.
'use strict';

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap();

readMessages.set(messages[0], Date.now());
readMessages.set(messages[2], Date.now());

alert(readMessages.get(messages[0]));
alert(readMessages.get(messages[1]));

