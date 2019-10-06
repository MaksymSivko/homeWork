/**
 * Задача 7.
 *
 * Создайте функцию `getDivisors`, которая принимает число в качестве аргумента.
 * Функция возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 * - Генерировать ошибку, если в качестве входного аргумента был передано число меньшее, чем 1.
 */
let i = 1;
let arr = [];

const validation = value => {
	if (typeof value !== 'number' || value < 1) {
		throw new Error('Error');
	}
}

const some = value => {
	if (value % i === 0) {
		arr.push(i);
	}

	if (i <= value) {
		i++;
		some(value);
	}
}

const getDivisors = (value) => {
	validation(value);
	some(value);

	// Но мне кажется так проще или я ошибаюсь ?
	// for (let i = 1; i <= value; i++) {
	// 	if (value % i === 0) {
	// 		arr.push(i);
	// 	}
	// }
	return arr;
}

// Решение

getDivisors(12); // [1, 2, 3, 4, 6, 12]

exports.getDivisors = getDivisors;