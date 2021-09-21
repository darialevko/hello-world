var array = [2,4,5,6,3,1,6,9,7,5];

function multiply (x) {
	return x * 2;
}

for (var i=0; i < array.length; i++) {
	console.log(multiply(array[i]));
}

function callback (p) {
	console.log(p*2);
}

array.forEach(callback);