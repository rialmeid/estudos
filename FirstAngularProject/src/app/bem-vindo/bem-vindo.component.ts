import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {
  funcionarios = [];

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }
}
