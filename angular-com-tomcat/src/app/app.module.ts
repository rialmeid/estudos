import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { ArvoreComponent } from './arvore/arvore.component';
import { HeroesComponent } from './heroes/heroes.component';
import {TreeModule, TreeTable, TreeTableModule} from "primeng/primeng";


@NgModule({
  declarations: [
    AppComponent,
    ArvoreComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeModule,
    TreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
