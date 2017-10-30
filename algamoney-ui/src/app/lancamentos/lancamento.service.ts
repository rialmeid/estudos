import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Lancamento} from "../core/model";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: Http) {
  }

  pesquisar(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.lancamentosUrl, {headers})
      .toPromise()
      .then(
        response =>
          response.json().content
        /*{
         console.log(response.json().content)
         }*/
      )
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    return null;
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.lancamentosUrl.concat(`/${codigo}`), {headers})
      .toPromise()
      .then(response => {
        const lancamento = response.json() as Lancamento;
        this.converterStringsParaDatas([lancamento]);
        return lancamento;
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = new Date();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = new Date();
      }
    }
  }

}
