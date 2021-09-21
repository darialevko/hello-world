/*functions
are
awesome
*/

function test1 (x,y) {

} 

function test2 (z) {

}

function test3 (callBack,b,c) {
	var a = callBack(b,c);
	return a;
}

console.log(test3(function (e,d) {
	return e + d;
}, 5, 6));