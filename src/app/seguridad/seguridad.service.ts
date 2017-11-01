import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SeguridadService {

  constructor(private http: Http) { }

  registrarUsuario(usuario) {
    return this.http.post('http://localhost:3000/sign-in', usuario)
      .map( (response) => response.json() );
  }

  loguearUsuario(usuario) {
    return this.http.post('http://localhost:3000/login', usuario)
      .map( (response) => response.json() );
  }

  almacenarToken(token) {
    window.localStorage.setItem('token', token);
  }

  recuperarToken() {
    return window.localStorage.getItem('token');
  }

  estaAutenticado() {
    if(window.localStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

  cerrarSesion() {
    window.localStorage.removeItem('token');
  }

  verificarTokenValido() {
    const options = this.configurarCabeceras();
    return this.http.get('http://localhost:3000/verify', options).subscribe(
      (response) => console.log('estoy logueado'),
      (error) => this.cerrarSesion()
    );
  }

  configurarCabeceras() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'token': this.recuperarToken()
    });
    const options = new RequestOptions({ headers: headers });
    return options;
  }
}
