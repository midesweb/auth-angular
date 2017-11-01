import { Component, OnInit } from '@angular/core';

import { SeguridadService } from './../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  mensaje = '';
  registro = {
    email: 'a@a.com',
    password: 'qwe'
  };

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit() {
  }

  onRegistro() {
    this.mensaje = '';
    this.seguridadService.registrarUsuario(this.registro)
      .subscribe(
        (response) => {
          // console.log('response', response);
          this.mensaje = response;
        },
        (error) => {
          // console.log('error', error);
          this.mensaje = error._body;
        }
      );
  }

}
