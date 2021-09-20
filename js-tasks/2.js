		var letters = "abcdefghijklmnopqrstuvwxyz";
		var randomString = "";
		var i = randomString.length;

		while (i < 6) {
			randomString+=letters[Math.floor(Math.random() * letters.length)];
			i++;
		}
		console.log(randomString);
