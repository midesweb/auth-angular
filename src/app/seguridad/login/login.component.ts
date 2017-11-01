import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SeguridadService } from './../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: 'user@example.com',
    password: '1234'
  };
  mensaje = '';
  logueado = false;

  constructor(private seguridadService: SeguridadService, private router: Router) { }

  ngOnInit() {}

  onLogin() {
    this.seguridadService.loguearUsuario(this.usuario)
      .subscribe(
        (token) => {
          this.seguridadService.almacenarToken(token);
          this.router.navigate(['/']);
        },
        (error) => {
          this.mensaje = error._body;
        }
      );
  }

}
