import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

import { SeguridadService } from './seguridad/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private seguridadService: SeguridadService) {}

  ngOnInit() {
    this.verificarLogin();
  }

  onLogout() {
    this.seguridadService.cerrarSesion();
  }

  verificarLogin() {
    this.seguridadService.verificarTokenValido();
  }
}
