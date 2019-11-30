/**
# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
*/

// Решение

class Customers {
    constructor() {
        this.customerList = [];
    }

    add(args) {
        if (typeof args !== 'object') {
            throw new Error('Error: obj');
        }

        if (!args.hasOwnProperty('name')) {
            throw new Error('Error: name');
        }

        // this.customerList = this.customerList.concat(args);
        //Можно и concat но push быстрей )))
        this.customerList.push(args);
    }

    *[Symbol.iterator]() {
        for (const obj of this.customerList) {
            if (obj.verified === true) {
                yield obj;
            }
        }
    }
}

// Пример использования
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
