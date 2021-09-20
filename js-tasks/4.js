/*
* - Generate array with random number from 0 to 1000000;
* - Filter generated array with numbers which divided by two;
* - Sort filtered array;
* - Print sum of all number from filtered array;
*   Sample
*   var array = [2,3,5,6];
*   var resultArray = [2, 6];
*   => The sum of numbers is: 8;
* */

var arr = [];
var newArr = [];
var resultArray = [];
var sum = 0;

while (arr.length < 4) {
	var r = Math.floor(Math.random() * 1000000 + 1);
    arr.push(r);
}
newArr = arr;
//console.log(newArr);

for (var i=0; i < newArr.length; i++) {
	if (newArr[i] % 2) {
		continue;
	} else {
		resultArray.push(newArr[i]);
	}
}
//console.log(resultArray);

for (var s=0; s < resultArray.length; s++) {
	sum+=resultArray[s];
}

console.log("The sum of numbers is: " + sum);

