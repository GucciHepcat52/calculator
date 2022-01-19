const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	// console.log(mathSymbol);
	// console.log(num1);
	// console.log(num2);

	if (mathSymbol === "+") {
		console.log(num1 + num2);
	} else if (mathSymbol === "-") {
		console.log(num1 - num2);
	} else if (mathSymbol === "*") {
		console.log(num1 * num2);
	} else if (mathSymbol === "/") {
		console.log(num1 / num2);
	} else if (mathSymbol === "^") {
		console.log(Math.sqrt(num1));
		console.log(Math.sqrt(num2));
	} else if (mathSymbol === "sq") {
		console.log(Math.pow(num1, 2));
		console.log(Math.pow(num2, 2));
	} else if (mathSymbol === "cube") {
		console.log(Math.pow(num1, 3));
		console.log(Math.pow(num2, 3));
	} else if (mathSymbol === "raised to") {
		console.log(Math.pow(num1, num3));
		console.log(Math.pow(num2, num3));
	} else if (mathSymbol === "%") {
		console.log(num1 % num2);
	} else {
		console.log("This operaton cannot be done");
	}

	// This line closes the connection to the command line interface.
	reader.close()

});
