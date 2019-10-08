/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3, 4, 5, 6];

function validation(val, func) {
    if (!Array.isArray(val)) {
        throw new Error('Error array');
    }
    if (val.length <= 1) {
        throw new Error('Error length');
    }
    if (typeof func !== 'function') {
        throw new Error('Error function');
    }
}

function every(arr, callback) {
    validation(arr, callback);

    if (typeof callback === 'function') {
        for (let i = 0; i < arr.length; i++) {
            const res = callback(arr[i], i, arr);
            if (!res) {
                return false;
            }
        }
    }
    return true;
}
// Решение

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});

console.log(result); // true

exports.every = every;