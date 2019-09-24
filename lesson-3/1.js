//Не люблю тернарный оператор но с ним код чище))

// let myText = 1234;
let myText = 'pitter';

const upperCaseFirst = el => {
	typeof el == 'string' ? console.log(el[0].toUpperCase() + el.slice(1)) : console.log('');
}

upperCaseFirst(myText);