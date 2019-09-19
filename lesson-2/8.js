const array = [1, 2, 3, 4, 5, 6];
let num = 0;

for (const newArray of array) {
	if (newArray > 3) {
		if (newArray % 2 == 0) {
			num += newArray;
		}
	}
}
console.log(num);