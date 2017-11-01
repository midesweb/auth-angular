import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-serie',
  templateUrl: './alta-serie.component.html',
  styleUrls: ['./alta-serie.component.css']
})
export class AltaSerieComponent implements OnInit {

  serie = {
    nombre: '',
    temporadas: 1,
    emision: 2017
  };

  constructor() { }

  ngOnInit() {
  }

}
