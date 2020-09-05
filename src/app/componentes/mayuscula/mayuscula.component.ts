import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayuscula',
  templateUrl: './mayuscula.component.html',
  styleUrls: ['./mayuscula.component.css']
})
export class MayusculaComponent implements OnInit {

  texto = "Ejemplo";

  constructor() { }

  ngOnInit(): void {
  }

}
