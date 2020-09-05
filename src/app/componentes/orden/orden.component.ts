import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  carros = {
    'Mercedes': 'Mercedes CLAP Coupé',
    'BMW': 'BMW M8',
    'Audi': 'Audi e-tron Sportback',
    'Tesla': 'Tesla Model S'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
