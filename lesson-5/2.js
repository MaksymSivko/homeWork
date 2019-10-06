/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */


const valid = value => {
	if (typeof value !== 'number') {
		throw new Error('Error');
	}
}

const f = function () {
	let sum = 0;

	for (value of arguments) {
		valid(value);
		sum += value;
	}

	return sum;
}

// Решение

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;