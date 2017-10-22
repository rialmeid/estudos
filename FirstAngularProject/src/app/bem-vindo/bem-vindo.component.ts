import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from "../funcionario-service";

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  funcionarios = [];

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.consultar();
  }

  constructor(private funcionarioService: FuncionarioService) {
  }

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
    this.funcionarioService.adicionar(funcionario.nome);
  }
}
