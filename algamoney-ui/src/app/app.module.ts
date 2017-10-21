import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {
  ButtonModule,
  CalendarModule,
  DataTableModule,
  DropdownModule,
  InputMaskModule,
  InputTextareaModule,
  SelectButtonModule,
  TabViewModule,
  TooltipModule
} from "primeng/primeng";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {FormsModule} from "@angular/forms";
import {LancamentosModule} from "./lancamentos/lancamentos.module";
import {PessoasModule} from "./pessoas/pessoas.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
