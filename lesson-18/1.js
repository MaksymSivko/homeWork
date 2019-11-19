/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение
class DB {
    person = new Map();

    //------------------------------ Validation
    validID(id) {
        if (typeof id !== 'number') {
            throw new Error('Error: id must be a number');
        }

        if (!this.person.has(id)) {
            throw new Error('Error: Invalid ID');
        }
    }

    validObj(obj) {
        if (typeof obj !== 'object') {
            throw new Error('Error: Value must be an object');
        }
    }
    //------------------------------ end Validation

    create(value) {
        this.validObj(value);

        const personID = Math.floor(Math.random() * 10000001);

        this.person.set(personID, value);

        return personID;
    }

    read(id) {
        if (arguments.length === 0) {
            throw new Error('Error: func read needs arguments !');
        }

        this.validID(id);

        if (!this.person.has(id)) {
            return null;
        }

        const onePerson = new Map().set(id, this.person.get(id));

        return onePerson;
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error('Error: func readAll dose not need arguments !');
        }

        return this.person;
    }

    update(id, value) {
        if (arguments.length < 2) {
            throw new Error('Error: func update need two arguments');
        }

        this.validID(id);
        this.validObj(value);

        for (const key in this.person.get(id)) {
            if (value.hasOwnProperty(key)) {
                this.person.get(id)[key] = value[key];
            }
        }
    }

    delete(id) {
        this.validID(id);
        this.person.delete(id);
    }
}

// Проверка
const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true
