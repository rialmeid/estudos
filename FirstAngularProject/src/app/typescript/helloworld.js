var MinhaClass = /** @class */ (function () {
    function MinhaClass() {
        this.filhos = [8, "Raissa"];
    }
    MinhaClass.prototype.dizerOla = function (nome) {
        console.log('olá' + nome);
        // ou
        console.log("ol\u00E1 com interpola\u00E7\u00E3o " + nome);
    };
    MinhaClass.prototype.imprimir = function () {
        console.log(c.filhos);
    };
    return MinhaClass;
}());
var c = new MinhaClass();
c.dizerOla('\nolá algaworks');
c.imprimir();
