import { RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { SeguridadService } from './seguridad/seguridad.service';

@Injectable()
export class HttpToolsService {

  constructor() { }

  configurarCabeceras() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      'token': window.localStorage.getItem('token')
    });
    const options = new RequestOptions({ headers: headers });
    return options;
  }
}
