const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
let maxPulss
let minPulss
readline.question("Sisesta enda vanus: ", vanus => {
	readline.question("Sisestage enda sugu (M, m või N, n): ", sugu => {
		readline.question("Sisestage treeningu tüüp(1, 2 või 3), ", tyyp => {
			(sugu.toLowerCase() == "m") ? pulss = 220 - vanus : 
			pulss = 206 - 0.88 * vanus;
			if (tyyp == 1) {
				minPulss = pulss * 0.5;
				maxPulss = pulss * 0.7;
			} else if (tyyp == 2) {
				minPulss = pulss * 0.7;
				maxPulss = pulss * 0.8;
			} else {
				minPulss = pulss * 0.8;
				maxPulss = pulss * 0.87;
			}
			console.log("Pulsisagedus peaks olema " + Math.round(minPulss) + " kuni " + Math.round(maxPulss))
			readline.close()
		});
	});
});
