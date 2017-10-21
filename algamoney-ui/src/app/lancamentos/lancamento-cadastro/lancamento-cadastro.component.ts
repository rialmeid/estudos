import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2}
  ];

  pessoas = [
    {label: 'Ricardo Lucas de Almeida', value: 1},
    {label: 'Erica Maria Simão de Almeida', value: 2},
    {label: 'Raissa Simão de Almeida', value: 3},
    {label: 'Lucas Simão de Almeida', value: 4}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
