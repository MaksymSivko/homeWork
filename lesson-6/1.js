/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.forEach использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода forEach (thisArg) имплементировать не нужно.
 */

const array = [1, 2, 3];

// Решение

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

function forEach(arr, callback) {
    validation(arr, callback);

    if (typeof callback === 'function') {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    }
}

const result = forEach(array, (element, index, arrayRef) => {
    console.log(`${index}: `, element, arrayRef);
});

console.log(result); // undefined

exports.forEach = forEach;