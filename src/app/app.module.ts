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
import { SeriesModule } from './series/series.module';
import { AltaSeriesComponent } from './series/alta-series/alta-series.component';
import { EditarSerieComponent } from './series/editar-serie/editar-serie.component';
import { AuthGuard } from './seguridad/auth-guard.service';


const rutas: Routes = [
  { path: '', component: HomeComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent},
  { path: 'altaSerie', canActivate: [AuthGuard], component: AltaSeriesComponent},
  { path: 'editarSerie/:id', component: EditarSerieComponent}
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
    SeguridadModule,
    SeriesModule
  ],
  providers: [
    SeguridadService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
