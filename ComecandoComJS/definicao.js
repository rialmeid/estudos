var obj = {
nome: "John",
sobrenome: "Snow",
idade: 16,
apresentar: apresentacao
};

function apresentacao() {
console.log("olá, eu sou " + this.nome + " " + this.sobrenome + ".");
}

console.log(obj.sobrenome);

obj.apresentar();