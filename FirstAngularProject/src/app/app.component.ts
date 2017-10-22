import {Component, OnInit} from "@angular/core";
import {FuncionarioService} from "./funcionario-service";
import {CidadeService} from "./cidade.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionarios = [];
  cidades = [];

  constructor(private funcionarioService: FuncionarioService,
              private cidadeService: CidadeService) {
  }

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.consultar();
    this.cidadeService.consultar()

  }

  nome = 'Ricardo';
  idade = 10;

  getIdade() {
    return this.idade;
  }


}
