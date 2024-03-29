//Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов
// в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой)
// и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0
function getMaxSubSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let nextSum = 0;
        for (let j =i; j <arr.length; j++){
            nextSum +=arr[j];
            sum = Math.max(sum, nextSum);
        }
    }
    return sum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); //5
alert(getMaxSubSum([2, -1, 2, 3, -9])); //6
alert(getMaxSubSum([-1, 2, 3, -9, 11]));// 11
alert(getMaxSubSum([-2, -1, 1, 2])); //3
alert(getMaxSubSum([100, -9, 2, -3, 5])); //100
alert(getMaxSubSum([1, 2, 3])); //6