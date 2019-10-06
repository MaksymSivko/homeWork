/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

const validation = value => {
	if (typeof value !== 'number') {
		throw new Error('Error');
	}
}

const isPositive = (value) => {
	validation(value);

	return value >= 0;
}

// Решение
isPositive(-3); // false
isPositive(3); // true

exports.isPositive = isPositive;