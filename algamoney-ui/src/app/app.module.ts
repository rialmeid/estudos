import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {
  ButtonModule, CalendarModule, DataTableModule, DropdownModule, InputTextareaModule, SelectButtonModule, TabViewModule,
  TooltipModule
} from "primeng/primeng";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {LancamentosPesquisaComponent} from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {PessoasPesquisaComponent} from "./pessoas-pesquisa/pessoas-pesquisa.component";
import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CurrencyMaskModule} from "ng2-currency-mask";
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
