function dizerOi(nome) {
	console.log("oi " + nome);
	console.log(this);
}

// primeira forma de invocar
dizerOi("Raissa");

// segunda forma de invocar
dizerOi.call({}, "Lucas");

// terceira forma de invocar
dizerOi.apply({}, ["Erica"]);