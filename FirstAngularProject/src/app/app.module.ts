import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HelloComponent} from "./hello/hello.component";
import {BemVindoComponent} from './bem-vindo/bem-vindo.component';
import {FormsModule} from "@angular/forms";
import {FuncionarioCardComponent} from './funcionario-card/funcionario-card.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {CampoColoridoDirective} from './campo-colorido.directive';
import {TemplateDrivenComponent} from './template-driven/template-driven.component';
import {BotoesModule} from "./botoes/botoes.module";
import {NavegacaoModule} from "./navegacao/navegacao.module";


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
