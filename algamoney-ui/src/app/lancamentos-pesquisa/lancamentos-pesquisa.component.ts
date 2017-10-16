import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de pão',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 3.50,
      pessoa: 'Padaria Natural'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Fretado',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 354.50,
      pessoa: 'Natal'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Convenio',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 366.50,
      pessoa: 'Amil'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Condominio',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 343.50,
      pessoa: 'Helbor'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Carro',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 323.50,
      pessoa: 'Bradesco'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Escola',
      dataVencimento: new Date(2017, 10, 15),
      dataPagamento: null,
      valor: 1345.50,
      pessoa: 'Gutemberg'
    }
  ];


}
