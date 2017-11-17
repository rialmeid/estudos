function Stark(nome, idade, cabelo) {
	this.nome = nome;
	this.idade = idade;
	this.cabelo = cabelo;
	this.sobrenome = "Stark";
	this.apresentar = function() {
		console.log("olá, eu sou " + this.nome + " " + this.sobrenome + ".");
	}
}

var ned = new Stark("Ned", 40, "Preto");
ned.dizerTchau = function() {
	console.log("Tchau");
}
ned.apresentar();
ned.dizerTchau();

Stark.prototype.dizerTchau = function() {
	console.log("Tchau");
}

var sansa = new Stark("Sansa", 13, "Cobre");
sansa.apresentar();
sansa.dizerTchau();