import { Component, OnInit } from '@angular/core';
import { SeriesService } from './../series.service';
import { Serie } from './../serie.model';

@Component({
  selector: 'app-alta-series',
  templateUrl: './alta-series.component.html',
  styleUrls: ['./alta-series.component.css']
})
export class AltaSeriesComponent implements OnInit {

  serie: Serie;
  mensaje = '';

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.serie = this.seriesService.serieNueva();
  }

  onCrearSerie() {
    this.mensaje = '';
    this.seriesService.guardarSerie(this.serie).subscribe(
      (response) => {
        this.mensaje = 'Serie agregada';
      },
      (error) => console.log(error)
    );
  }
}