import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SeguridadModule } from './seguridad/seguridad.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { SeguridadService } from './seguridad/seguridad.service';

const rutas: Routes = [
  { path: '', component: HomeComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rutas),
    SeguridadModule
  ],
  providers: [
    SeguridadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
