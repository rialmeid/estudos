import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LancamentosModule} from "./lancamentos/lancamentos.module";
import {PessoasModule} from "./pessoas/pessoas.module";
import {CoreModule} from "./core/core.module";
import {LancamentoService} from "./lancamentos/lancamento.service";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {LancamentosPesquisaComponent} from "./lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component";
import {LancamentoCadastroComponent} from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import {PessoasPesquisaComponent} from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";
import {PessoaCadastroComponent} from './pessoas/pessoa-cadastro/pessoa-cadastro.component';


const routes: Routes = [
  {path: 'lancamentos', component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo', component: LancamentoCadastroComponent},
  {path: 'lancamentos/:codigo', component: LancamentoCadastroComponent},
  {path: 'pessoas', component: PessoasPesquisaComponent},
  {path: 'pessoas/novo', component: PessoaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
