<script>
		var input = "javascript is awesome";
		var output = "";
		var x = "4";
		var y = "3";
		var z = "1";
		var c = "0";

		for (var i=0; input.length > i; i++) {
			if (input[i] === "a") {
				output+=x;
			} else if (input[i] === "e") {
				output+=y;
			} else if (input[i] === "i") {
				output+=z;
			} else if (input[i] === "o") {
				output+=c;
			} else {
				output+=input[i]
			}
		}
		console.log(output);
	</script>