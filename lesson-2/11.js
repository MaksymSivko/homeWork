const array = [2, -1, -3, 15, 0, 4];
let num = 0;

for (const newArray of array) {
	if (newArray > 0) {
		num += newArray;
	}
}
console.log(num);