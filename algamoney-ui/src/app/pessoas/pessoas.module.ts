import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PessoaCadastroComponent} from "./pessoa-cadastro/pessoa-cadastro.component";
import {PessoasPesquisaComponent} from "./pessoas-pesquisa/pessoas-pesquisa.component";
import {PessoasGridComponent} from "./pessoas-grid/pessoas-grid.component";
import {FormsModule} from "@angular/forms";
import {ButtonModule, DataTableModule, InputMaskModule, TooltipModule} from "primeng/primeng";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputMaskModule,
    DataTableModule,
    TooltipModule,
    ButtonModule,

    SharedModule,
    RouterModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
