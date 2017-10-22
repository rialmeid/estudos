import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FuncionarioService} from "../funcionario-service";

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
  apelidoAdicionado = false;

  @Output() funcionarioAdicionado = new EventEmitter();

  constructor(private funcionarioService: FuncionarioService) {}

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    const numero = Math.round(Math.random() * 100);
    this.nome = 'Erica ' + numero;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    this.funcionarioAdicionado.emit(funcionario);

    // this.funcionarioService.adicionar(this.nome);
  }

  alterarNome(event: any) {
    this.nome = event.target.value;
  }

  adicionarApelido(apelido: any) {
    console.log(apelido);
    this.apelidoAdicionado = true;
    this.apelido = apelido;
  }
}
