/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

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

function filter(arr, callback) {
    const item = [];
    validation(arr, callback);

    if (typeof callback === 'function') {

        for (let i = 0; i < arr.length; i++) {
            const res = callback(arr[i], i, arr);
            if (res) {
                item.push(arr[i]);
            }
        }
    }
    return item;
}
// Решение

const filteredArray = filter(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;