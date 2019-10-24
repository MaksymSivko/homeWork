/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * Функция calculate() должна вернуть результат выполнения последней коллбек-функции из цепочки.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

const validationFunc = (value) => {
	for (const func of value) {
		if (typeof func !== 'function') {
			throw new Error('Errore, argument not a function !');
		}
		if (typeof func() === 'undefined') {
			throw new Error("Errore, argument didn't return value!");
		}
	}
}

const calculate = (...args) => {
	validationFunc(args);
	let result = null;

	for (const func of args) {
		result = func(result);
	}
	return result;
}

const result = calculate(
	() => {
		return 7;
	},
	prevResult => {
		return prevResult + 4;
	},
	prevResult => {
		return prevResult * 5;
	},
);


console.log(result); // 55

exports.calculate = calculate;