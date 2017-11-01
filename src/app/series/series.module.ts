import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SeriesService } from './series.service';
import { AltaSeriesComponent } from './alta-series/alta-series.component';
import { ListadoSeriesComponent } from './listado-series/listado-series.component';
import { ItemSerieComponent } from './item-serie/item-serie.component';
import { EditarSerieComponent } from './editar-serie/editar-serie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaSeriesComponent,
    ListadoSeriesComponent,
    ItemSerieComponent,
    EditarSerieComponent
  ],
  exports: [
    AltaSeriesComponent,
    ListadoSeriesComponent,
    EditarSerieComponent
  ],
  providers: [
    SeriesService
  ]
})
export class SeriesModule { }
