import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeguridadService } from './seguridad.service';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ],
  providers: [
    SeguridadService
  ]
})
export class SeguridadModule { }
