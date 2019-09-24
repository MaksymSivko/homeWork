const PRICE = '$120';

const extractCurrencyValue = el => {
	typeof el == 'string' ? console.log(el.slice(1)) : console.log(null);
}

extractCurrencyValue(PRICE);