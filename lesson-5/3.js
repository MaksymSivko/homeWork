/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

const valid = value => {
	if (typeof value !== 'number') {
		throw new Error('Error');
	}
}

const f = (value1, value2, value3) => {
	valid(value1);
	valid(value2);
	valid(value3);

	const result = (value1 - value2) / value3;

	return result;
}

// Решение

console.log(f(9, 3, 2)); // 3

exports.f = f;