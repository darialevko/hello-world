/*
- Generate random string with 1000 symbols
- Remove from it any vowels letters
- Print result into console
*/

var randomString = "";
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var vowels = "AEIOUaeiou";
var result = "";

for (var i=0; i < 1000; i++) {
	randomString+=letters.charAt(Math.floor(Math.random() * letters.length));
}
console.log(randomString); //mXaLCozUAi

for (var i=0; i < randomString.length; i++) {
if (vowels.includes(randomString[i]) === false) {
		result += randomString[i];
	}
}
console.log(result); //mXLCz