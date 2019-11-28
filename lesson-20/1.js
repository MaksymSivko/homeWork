/*
Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

1. Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.
2. Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:
1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`
*/

// Решение
class Customers {
    constructor() {
        this.customerList = [];
    }

    add(...args) {
        if (typeof args !== 'object') {
            throw new Error('Error: obj');
        }
        for (const key in args) {
            if (!args[key].hasOwnProperty('name')) {
                throw new Error('Error: name');
            }
            this.customerList.push(...args);
        }
    }

    [Symbol.iterator]() {
        const custom = this.customerList;
        let index = 0;

        return {
            next() {
                let result = { value: null, done: true };

                if (index < custom.length) {
                    if (custom[index].hasOwnProperty('verified')) {
                        result.value = custom[index];
                    }
                    result.done = false;
                    index++;
                }
                return result;
            }
        };
    }
}

// Пример использования:
const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
