import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  private _url = 'http://localhost:3000/cidades';

  consultar(): Promise<any> {
    return this.http.get(this._url)
      .toPromise()
      .then(
        response => response.json()
      )
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post(this._url, cidade)
      .toPromise()
      .then(
        response => response.json()
      )
  }

  excluir(id: number):Promise<void> {
    return this.http.delete(this._url.concat(`/${id}`))
      .toPromise()
      .then(() => null)
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(this._url.concat(`/${cidade.id}`), cidade)
      .toPromise()
      .then(
        response => {
          response.json()
        }
      )
      .catch(
        erro => {
          console.log(erro);
          return Promise.reject(`Erro ao alterar Cidade ${cidade.id}`);
        }
      )

  }
}
