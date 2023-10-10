const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Sisesta õhutemperatuur: ', ohuTemp => {
  if (ohuTemp <= 4.0) {
  	console.log("On jäätumise oht!")
  } else {
  	console.log("Ei ole jäätumise ohtu.")
  }
  readline.close();
});