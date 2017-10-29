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
    const headers = this.headersWithAuthorization();

    return this.http.get(this.lancamentosUrl, { headers })
      .toPromise()
      .then(
        response =>
          response.json()

        // {console.log(response.json())}

      )
  }

  private headersWithAuthorization() {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return headers;
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    return null;
  }

  buscarPorCodigo(codigo: Number): Promise<Lancamento> {
    return null;
  }

}
