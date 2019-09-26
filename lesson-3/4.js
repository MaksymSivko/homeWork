const PRICE = '$120';

const extractCurrencyValue = el => {
	let a = Number(el.slice(1));
	// typeof el == 'string' ? console.log(a) : console.log(null);

	if (typeof el == 'string') {
		return a;
	}
	return null;
}

// extractCurrencyValue(PRICE);
console.log(extractCurrencyValue(PRICE));