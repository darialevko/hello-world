// Split string and numbers into separated arrays
// ignore any not string or number values
// print into console results

const source = ['car', 'tree', 34, 2, 'range rover', 'girl', {}, null, 54, 76, 'chevrolet'];

// tips
// use typeof operator to understand what is what
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

var str = [];
var num = [];

for (var i=0; source.length > i; i++) {

	if (typeof source[i] === 'number') {
		num.push(source[i]);
	} else if (typeof source[i] === 'string') {
		str.push(source[i]);
	} else {
		continue;
	}
}

console.log(num);
console.log(str);