import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Ricardo Lucas de Almeida', cidade: 'Mogi das Cruzes', estado: 'SP', ativo: true},
    {nome: 'Lucas Simão de Almeida', cidade: 'Mogi das Cruzes', estado: 'SP', ativo: false},
    {nome: 'Erica Maria Simão de Almeida', cidade: 'Mogi das Cruzes', estado: 'SP', ativo: true},
    {nome: 'Raissa Simão de Almeida', cidade: 'Mogi das Cruzes', estado: 'SP', ativo: false}
  ];

}
