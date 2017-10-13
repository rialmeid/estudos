import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  ultimoId = 0;
  nome = 'Ricardo';
  apelido = '';
  sobrenome = '';
  adicionado = false;

  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Erica ' + numero;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);

  }

  alterarNome(event: any) {
    // console.log(event);
    this.nome = event.target.value;
  }

  adicionarApelido(apelido: any) {
    console.log(apelido);
    this.adicionado = true;
    this.apelido = apelido;
  }



}
