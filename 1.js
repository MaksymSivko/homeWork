/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const validation = (value) => {
	if (!Array.isArray(value)) {
		throw new Error('Error, argument is not an array !');
	}
}

const inspect = (value) => {
	validation(value);

	const arrFilter = [];
	const newArr = [];

	value.filter(val => {
		if (typeof val === 'string') {
			arrFilter.push(val);
		}
	});

	arrFilter.map(val => {
		if (val.length > 0) {
			newArr.push(val.length);
		}
	});

	return newArr;
}

const array = [
	false,
	'Привет.',
	2,
	'Здравствуй.',
	[],
	'Прощай.',
	{
		name: 'Уолтер',
		surname: 'Уайт',
	},
	'Приветствую.',
];

// Решение

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;