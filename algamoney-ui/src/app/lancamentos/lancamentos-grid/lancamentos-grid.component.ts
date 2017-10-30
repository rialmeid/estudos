import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lancamentos-grid',
  templateUrl: './lancamentos-grid.component.html',
  styleUrls: ['./lancamentos-grid.component.css']
})
export class LancamentosGridComponent implements OnInit{

  @Input() lancamentos = [];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }


}
