function areArraysSame (x,y) {
	if (x.length === y.length) {
		for (var i=0; i < x.length; i++) {
			if (x[i] != y[i]) {
				return false;
			}
		} 
		return true;

	}
return false;
}

// result:
// areArraysSame([1,2,3], [1,2,3,4])
//false

//areArraysSame([1,2,3], [1,2,3,4])
//false

//areArraysSame([1,2,3], [4,5,6])
//false
