const value = 3;

switch (value) {
	case 0:
		console.log('0');
		break;
	case 1:
		console.log('1');
		break;
	case 2:
	case 3:
		// case 2 || 3:  // Так тоже можно ?
		console.log('2,3');
		break;
	default:
		break;
}