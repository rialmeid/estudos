class MinhaClass {

  ativo: boolean;
  nome: string;
  idade: number;
  filhos: [number, string] = [8, "Raissa"];
  descricao: any;

  dizerOla(nome: string) {
    console.log('olá' + nome);
    // ou
    console.log(`olá com interpolação ${nome}`);
  }

  imprimir() {
    console.log(c.filhos);
  }


}

let c: MinhaClass = new MinhaClass();
c.dizerOla('\nolá algaworks');
c.imprimir();

