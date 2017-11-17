function dizerOi(nome) {
	console.log("oi " + nome);
}

dizerOi("Jon");
dizerOi("Mary");

var dizerOla = function (nome) {
	console.log("olá " + nome);	
}

dizerOla("Erica");

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");
dizerTchau("Rick");