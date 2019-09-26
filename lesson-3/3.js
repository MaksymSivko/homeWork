let myText = 'Вот, что мне хотелось бы сказать на эту тему:';
let maxlenght = 21;
// let maxlenght = '22';

const truncaste = (str, numb) => {
	if (typeof str == 'string' && typeof numb == 'number') {
		if (str.length > numb) {
			console.log(`${str.slice(0, numb-3)}...`);
		} else {
			console.log(str);
		}
	} else {
		console.log('Error');
	}
}

truncaste(myText, maxlenght);