import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms/src/forms";

class Cliente {
  nome: string | any;
  email: any;
  profissao: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  profissoes = ['Programador', 'Trader', 'Empresário', 'Outras'];

  cliente = new Cliente();

  salvar(form: NgForm) {
    this.cliente.nome = form.value.nome;
    this.cliente.email = form.value.email;
    this.cliente.profissao = form.value.profissao;

    console.log(form.value);
    console.log(this.cliente);

  }


}
