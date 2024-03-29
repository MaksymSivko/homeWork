/**
 * Задача 7.
 *
 * Создайте функцию `f`, которая принимает массив в качестве параметра.
 * Функция возвращает undefined, и последовательно выводит в консоль (с помощью console.log) элементы массива,
 * переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не массив;
 * - Генерировать ошибку, если в качестве входного аргумента был передан пустой массив;
 * - Обязательно использовать рекурсию;
 * - Использовать циклы запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */
let i = 0;

const validation = value => {
	if (!Array.isArray(value)) {
		throw new Error('Error');
	}
	if (value == '') {
		throw new Error('Error');
	}
}

const some = value => {
	if (i <= value.length - 1) {
		console.log(value[i]);
		i++;
		some(value);
	}
}

const f = (value) => {
	validation(value);
	some(value);
}
// Решение

f([1, 2, 3]);
// 1
// 2
// 3

exports.f = f;