/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */


const valid = val => {
	const numb = typeof val !== 'number';
	return numb;
}


const f = (vel) => {
	valid(vel);

	return vel * vel;
}

// Решение

console.log(f(2)); // 8

exports.f = f;