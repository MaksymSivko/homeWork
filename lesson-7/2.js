/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

const validation = (value) => {
	if (!Array.isArray(value)) {
		throw new Error('Error, argument is not an array !');
	}
	if (!Array.isArray(value[0])) {
		throw new Error('Error, first elemetns is not an array !');
	}
}

const validationNumb = (value) => {
	value.some(val => {
		if (typeof val === 'string') {
			throw new Error('Error, argument is not a numbers !');
		}
	});
}

const reducer = (value) => {
	// Мне кажится так на много проще для понимания.
	while (value.some(Array.isArray)) {
		value = [].concat(...value);
	}

	//Но был и такой вариант но он запутаней на много как по мне (((
	// if (Array.isArray(value)) {
	// 	return value.reduce((sum, curr) => {
	// 		return sum + reducer(curr);
	// 	}, 0);
	// }
	return value;
}

const collect = (value) => {
	validation(value)
	validationNumb(reducer(value));

	const newArr = reducer(value);

	return newArr.reduce((sum, curr) => {
		return sum + curr;
	}, 0);
}

// Решение

const array1 = [
	[
		[1, 2],
		[1, 2]
	],
	[
		[2, 1],
		[1, 2]
	]
];
console.log(collect(array1)); // 12

const array2 = [
	[
		[
			[
				[1, 2]
			]
		]
	]
];
console.log(collect(array2)); // 3

const array3 = [
	[
		[
			[
				[1, 2]
			]
		], 2
	], 1
];
console.log(collect(array3)); // 6

const array4 = [
	[
		[
			[
				[]
			]
		]
	]
];
console.log(collect(array4)); // 0

const array5 = [
	[
		[
			[
				[], 3
			]
		]
	]
];
console.log(collect(array5)); // 3

exports.collect = collect;