import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LancamentoService} from "../lancamento.service";
import {Lancamento} from "../../core/model";
import {FormControl} from "@angular/forms";

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

  lancamento = new Lancamento();

  constructor(
    private lancamentoService: LancamentoService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params['codigo'];

    if (codigoLancamento) {
      this.carregarLancamento(codigoLancamento);
    }
  }

  get editando() {
    return Boolean(this.lancamento.codigo);
  }

  private carregarLancamento(codigoLancamento: number) {
    this.lancamentoService.buscarPorCodigo(codigoLancamento)
      .then(lancamento => {
        this.lancamento = lancamento;
      });

  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarLancamento(form);
    } else {
      this.adicionarLancamento(form);
    }
  }

  atualizarLancamento(form: FormControl) {
    this.lancamentoService.atualizar(this.lancamento)
      .then(lancamento => {
        this.lancamento = lancamento;
      });
  }

  adicionarLancamento(form: FormControl) {

  }
}
