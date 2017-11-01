import { Router } from '@angular/router';
import { Subscriber } from 'rxjs/Subscriber';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


import { HttpToolsService } from './../http-tools.service';
import { Serie } from './serie.model';

@Injectable()
export class SeriesService {

  constructor(
    private http: Http,
    private httpToolsService: HttpToolsService,
    private router: Router
  ) { }

  guardarSerie(serie: Serie) {
    const options = this.httpToolsService.configurarCabeceras();
    return this.http.post('http://localhost:3000/series', serie, options);
  }

  recuperarSeries() {
    const options = this.httpToolsService.configurarCabeceras();
    return this.http.get('http://localhost:3000/series', options)
      .map( (response) => response.json() );
  }

  borrarSerie(serie) {
    const options = this.httpToolsService.configurarCabeceras();
    return this.http.delete('http://localhost:3000/series/' + serie.id, options);
  }

  recuperarUnaSerie(id) {
    const ruta = 'http://localhost:3000/series/' + id;
    const options = this.httpToolsService.configurarCabeceras();
    return this.http.get(ruta, options)
      .map( (response) => response.json() );
  }

  actualizarSerie(serie) {
    const ruta = 'http://localhost:3000/series/' + serie.id;
    const options = this.httpToolsService.configurarCabeceras();
    return this.http.put(ruta, serie, options)
      .map( (response) => response.json() )
      .catch( (error) => {
        if (error.status = 401) {
          this.router.navigate(['/login']);
          return Observable.throw('No autorizado');
        } else {
          return Observable.throw('Error desconocido');
        }
      });
  }

  serieNueva(): Serie {
    return {
      nombre: '',
      temporadas: 1,
      emision: 2000
    };
  }
}
