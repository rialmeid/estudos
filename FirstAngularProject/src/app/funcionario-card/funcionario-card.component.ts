import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [

    `
    .card-block {
  text-transform: uppercase;
  color: green;
}
`
  ]
})
export class FuncionarioCardComponent {
  @Input() funcionario: any;
}
