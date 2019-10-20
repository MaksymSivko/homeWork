/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение



const definePropertys = (newObj, keyObj, oldObj) => {
	for (const data of Object.keys(oldObj)) {
		if (keyObj === data) {
			Object.defineProperty(newObj, data, {
				enumerable: Object.getOwnPropertyDescriptor(oldObj, data).enumerable,
				configurable: Object.getOwnPropertyDescriptor(oldObj, data).configurable,
				writable: Object.getOwnPropertyDescriptor(oldObj, data).writable,
			});
		}
	}
}

const cloneDesc = (obj, user, userData) => {
	for (const dataObj of Object.keys(obj)) {
		definePropertys(obj, dataObj, user);
		definePropertys(obj, dataObj, userData);
	}
	return obj;
}

const shallowMerge = (value1, value2) => {
	const myClone = Object.assign({},
		value1,
		value2,
	);
	return cloneDesc(myClone, value1, value2);
}

const user = {
	firstName: 'Marcus',
	lastName: 'Kronenberg'
};
const userData = {
	job: 'developer',
	country: 'Germany',
	lastName: 'Schmidt'
};

Object.defineProperty(user, 'firstName', {
	writable: false
});
Object.defineProperty(userData, 'job', {
	configurable: false
});

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;