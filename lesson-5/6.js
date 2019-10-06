/**
 * Задача 6.
 *
 * Создайте функцию `isEven`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе чётное — возвращается true.
 * Если число, переданное в аргументе нечётное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

const validation = value => {
	if (typeof value !== 'number') {
		throw new Error('Error');
	}
}

const isEven = (value) => {
	validation(value);

	return (value % 2) == 0;
}

// Решение

isEven(3); // false
isEven(4); // true

exports.isEven = isEven;