/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (включительно).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

const createNumberGenerator = () => {
	let counts = null;
	let randomNumb = null;
	let randomArr = [];

	return () => {

		if (counts >= 100) {
			throw new Error('There are no more numbers available !!!');
		}

		counts++;

		function myRandom() {
			randomNumb = Math.floor(Math.random() * 101);

			if (randomArr.every(elem => elem !== randomNumb)) {
				randomArr.push(randomNumb);
				return randomNumb;
			}
			return myRandom();
		}
		return myRandom();
	}
}

const TOTAL_ITERATIONS = 105;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
	for (invocations; invocations < TOTAL_ITERATIONS; invocations++) {
		console.log(`Iteration: ${invocations}. Number: ${generateNumber()}`);
	}
} catch (error) {
	console.log(`${error.name}: ${error.message}`);
	console.log(`Function generated an error on ${invocations} invocation.`);
}

// Когда все числа выведутся:
// Error: There are no more numbers available.
// Function generated an error on 100 invocation.

exports.createNumberGenerator = createNumberGenerator;