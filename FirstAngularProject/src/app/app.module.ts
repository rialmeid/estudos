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
import {FuncionarioService} from "./funcionario-service";
import {CidadeService} from "./cidade.service";
import {HttpModule} from "@angular/http";
import { CidadesComponent } from './cidades/cidades.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { TypescriptComponent } from './typescript/typescript.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    TemplateDrivenComponent,
    CidadesComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppsettingsComponent,
    AppmenuComponent,
    TypescriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    HttpModule
  ],
  providers: [
    FuncionarioService,
    CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
