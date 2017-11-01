import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-editar-serie',
  templateUrl: './editar-serie.component.html',
  styleUrls: ['./editar-serie.component.css']
})
export class EditarSerieComponent implements OnInit {

  serie: Serie;
  mensaje = '';

  constructor(
    private seriesService: SeriesService,
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit() {
    this.serie = this.seriesService.serieNueva();
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        console.log('params', params);
        this.recuperarUnaSerie(params.id);
      }
    );
  }

  recuperarUnaSerie(id) {
    this.seriesService.recuperarUnaSerie(id)
      .subscribe(
        (response) => this.serie = response,
      );
  }

  onEditarSerie() {
    this.mensaje = '';
    this.seriesService.actualizarSerie(this.serie)
      .subscribe(
        (response) => {
          this.mensaje = 'serie editada';
        },
        (error) => {
          this.mensaje = error;
        }
      );
  }
}
