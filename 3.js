/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

const validation = (value, length) => {
	if (typeof length !== 'number') {
		throw new Error('Error, argument is not a number !');
	}

	if (typeof value === 'number') {
		throw new Error('Error, argument a number !');
	}

	if (typeof value === 'object') {
		throw new Error('Error, argument a number !');
	}
}

const createArray = (value, length) => {
	validation(value, length);

	return new Array(length).fill(value);
}

// Решение

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;