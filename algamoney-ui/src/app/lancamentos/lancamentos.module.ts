import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LancamentoCadastroComponent} from "./lancamento-cadastro/lancamento-cadastro.component";
import {LancamentosPesquisaComponent} from "./lancamentos-pesquisa/lancamentos-pesquisa.component";
import {LancamentosGridComponent} from "./lancamentos-grid/lancamentos-grid.component";
import {FormsModule} from "@angular/forms";
import {
  ButtonModule, CalendarModule, DataTableModule, DropdownModule, InputMaskModule, InputTextareaModule, InputTextModule,
  TooltipModule
} from "primeng/primeng";
import {SelectButtonModule} from "primeng/components/selectbutton/selectbutton";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,

    SharedModule,
    RouterModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
