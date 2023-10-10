const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
}); 
let loosiArv = Math.random()
readline.question('Kas soovite ise istekoha valida või loosida("ise" või "loos") ', valik => {
	if (valik == 'ise') {
		readline.question('Kas soovite istuda akna ääres või mitte("aken" või "muu") ', koht => {
			if (koht == 'aken') {
				console.log('Valisite ise. Aknakoht')
				readline.close()

			} else {
				console.log('Valisite ise. Vahekäigukoht')
				readline.close()
			}
			
		});
	} else {
		(loosiArv <= 1/3) ? console.log('Istekoht loositi. Aknakoht') : 
		console.log('Istekoht loositi. Vahekäigu koht')
		readline.close()
	}
});
