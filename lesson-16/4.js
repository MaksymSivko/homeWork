/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 *
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение
class Stringer {
    constructor(value) {
        this.value = value;
    }

    reverse(value) {
        this.value = value;
        return this.value
            .split('')
            .reverse()
            .join('');
    }

    uppercaseFirst(value) {
        this.value = value;
        return this.value[0].toUpperCase() + this.value.slice(1);
    }

    uppercaseAll(value) {
        this.value = value;
        return this.value
            .split(' ')
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(' ');
    }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!!')); // Good Morning!

exports.Stringer = Stringer;
