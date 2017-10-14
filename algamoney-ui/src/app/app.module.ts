import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ButtonModule, DataTableModule, TabViewModule, TooltipModule} from "primeng/primeng";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {LancamentosPesquisaComponent} from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {PessoasPesquisaComponent} from "./pessoas-pesquisa/pessoas-pesquisa.component";

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
