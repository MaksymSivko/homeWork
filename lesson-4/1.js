/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */


const person = {
	get salary() {
		const myData = new Date();
		let lastDay = new Date(myData.getFullYear(), myData.getMonth(), 0).getDate();
		let toDay = myData.getDate();

		if ((lastDay - toDay) > 20) {
			return `good salary`;
		}
		return `bad salary`;
	}
};

// Решение

person.salary; // good salary

exports.person = person;