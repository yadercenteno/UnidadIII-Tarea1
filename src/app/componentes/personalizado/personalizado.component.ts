import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.css']
})
export class PersonalizadoComponent implements OnInit {

  cuadrado = 280;

  constructor() { }

  ngOnInit(): void {
  }

}
