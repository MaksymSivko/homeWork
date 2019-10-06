/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

const valid = value => {
	if (typeof value !== 'number') {
		throw new Error('Error');
	}
}

const f = (value) => {
	valid(value);

	return value * value * value;
}
// Решение

console.log(f(2)); // 8

exports.f = f;