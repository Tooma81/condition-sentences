const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
}); 

readline.question('Sisestage kirja suurus: ', suurus => {
	readline.question('Sisestage kirja teema pealkiri: ', teema => {
		readline.question('Kas kirjaga on kaasas fail: ', fail => {
			if (teema == '') {
				console.log('Kiri on spamm')
				readline.close()

			} else {
				(suurus > 1 && fail.toLowerCase() == 'jah') ? console.log('Kiri on spamm') : 
				console.log('Kiri ei ole spamm');
				readline.close()
			}
		});
	});
});