// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt)
// и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

'use strict';

function sumNumber() {
    let value1 = +prompt();
    let value2 = +prompt();
    alert(value1+value2);
}

alert(sumNumber());
