// 99 Bottles: Write code to print out the lyrics to 99 bottles of beer on the wall. Pay attention to pluralization!
	var bottles = 99
for (i = 100 ; i > 0 ; i--) {
	if (bottles > 1) {
		console.log ("")
		console.log (bottles + " bottles of beer on the wall");
		console.log (bottles + " bottles of beer");
		console.log (" take one down, pass it around");
		bottles -= 1
		console.log (bottles + " bottles of beer on the wall");
	}

 if (i === 1) {
 		console.log (bottles + " bottle of beer on the wall");
		console.log (bottles +" bottle of beer");
		console.log (" take one down, pass it around");
		bottles -= 1
		console.log (" no bottles of beer on the wall!");
		console.log ("")
 }
}