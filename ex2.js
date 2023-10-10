const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
let result
readline.question('Sisestage Leedu perenimi: ', nimi => {
  if (nimi.slice(-2) == "ne" || nimi.slice(-2) == "te") {
  		(nimi.slice(-2) == "ne") ? result = "Abielus" : result = "Vallaline"
  } else {
  		(nimi.slice(-1) == "e") ? result = "Määramata" : result = "Pole leedulanna nimi"
  }
  console.log(result)
  readline.close();
});