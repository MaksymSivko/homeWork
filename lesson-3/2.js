let email1 = 'pitterXXX@gmail.com';
let email2 = 'pitterxxx@gmail.com';

let example1 = 'xxx';
let example2 = 'XXX';

const checkSpam = (sourse, example) => {
	if (typeof sourse == 'string' && typeof example == 'string') {
		sourse = sourse.toLowerCase();
		example = example.toLowerCase();

		let index = sourse.indexOf(example);

		sourse = sourse.slice(index, (index + example.length));

		console.log(sourse == example);
	} else {
		console.log('Error');
	}
}

checkSpam(email2, example2);
checkSpam(email1, example1);