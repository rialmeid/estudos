import {Component, OnInit} from "@angular/core";
import {CidadeService} from "../cidade.service";

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit() {
    this.consultar();
  }

  private consultar() {
    this.cidadeService.consultar()
      .then(
        dados => {
          this.cidades = dados;
        }
      )
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({nome: nome})
      .then(
        cidade => {
          alert(`Cidade "${cidade.nome}" adicionada`);
          this.consultar();
        }
      )
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade excluida com sucesso');
        this.consultar();
      })

  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(
        () => {
          alert('Cidade alterada com sucesso');
        }
      )
      .catch(erro => {
        alert(erro);
      })
  }
}
