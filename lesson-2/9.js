const array = [1, 2, 3, 4, 5, 6];
let element = [];

for (let i = array.length - 1; i >= 0; i--) {
	element += array[i];
}

console.log(element);