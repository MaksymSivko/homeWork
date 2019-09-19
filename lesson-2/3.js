const value = 'c';

if (value === 'a') {
	console.log('a');
} else if (value === 'b' || value === 'c' || value === 'd' || value === 'e') {
	console.log('other');
} else {
	console.log('unknown');
}