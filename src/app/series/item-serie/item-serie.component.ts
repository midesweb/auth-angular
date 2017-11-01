import { Router } from '@angular/router';

import { Serie } from './../serie.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-serie',
  templateUrl: './item-serie.component.html',
  styleUrls: ['./item-serie.component.css']
})
export class ItemSerieComponent implements OnInit {

  @Input()
  serie: Serie;

  @Output()
  borrarSerie = new EventEmitter<Serie>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBorrarSerie() {
    this.borrarSerie.emit(this.serie);
  }

  onEditarSerie() {
    this.router.navigate(['/editarSerie', this.serie.id]);
  }

}
