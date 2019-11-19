/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */
// Решение
const validation = (...args) => {
    for (const numb of args) {
        if (typeof numb !== 'number') {
            throw new Error('Error: Argument must be a number');
        }
    }
};

const postpone = (start, end, delay) => {
    validation(start, end, delay);

    function timeUp(numb, delay) {
        setTimeout(() => {
            console.log(numb);
        }, delay * numb);
    }

    function timeDown(numb, delay) {
        setTimeout(() => {
            console.log(numb);
        }, delay - 1000 * numb);
    }

    if (start <= end) {
        for (let i = start; i <= end; i++) {
            timeUp(i, delay);
        }
    }

    if (start >= end) {
        delay = delay * (start + 1);
        for (let i = start; i >= end; i--) {
            timeDown(i, delay);
        }
    }
};

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
