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
      dataVencimento: '01/01/2017',
      dataPagamento: '',
      valor: 3.50,
      pessoa: 'Padaria Natural'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Fretado',
      dataVencimento: '02/01/2017',
      dataPagamento: '',
      valor: 354.50,
      pessoa: 'Natal'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Convenio',
      dataVencimento: '03/01/2017',
      dataPagamento: '',
      valor: 366.50,
      pessoa: 'Amil'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Condominio',
      dataVencimento: '04/01/2017',
      dataPagamento: '',
      valor: 343.50,
      pessoa: 'Helbor'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Carro',
      dataVencimento: '05/01/2017',
      dataPagamento: '',
      valor: 323.50,
      pessoa: 'Bradesco'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Escola',
      dataVencimento: '06/01/2017',
      dataPagamento: '',
      valor: 345.50,
      pessoa: 'Gutemberg'
    }
  ];


}
