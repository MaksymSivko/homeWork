'use strict';
/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
	rate: '',
	get salary() {
		const myData = new Date();
		let toDay = myData.getDate();

		if (this.rate) {
			return `${toDay * this.rate}`;
		}
		return 0;
	},
};

Object.defineProperty(person, 'rate', {
	enumerable: false,
	configurable: false,
});

Object.defineProperty(person, 'salary', {
	enumerable: false,
	configurable: false,
});

// Решение
delete person.rate;
person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;