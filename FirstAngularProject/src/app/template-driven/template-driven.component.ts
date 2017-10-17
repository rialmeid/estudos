import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms/src/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  salvar(form: NgForm) {
    console.log(form);
  }


}
