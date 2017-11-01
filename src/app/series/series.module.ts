import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AltaSerieComponent } from './alta-serie/alta-serie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaSerieComponent
  ],
  exports: [
    AltaSerieComponent
  ]
})
export class SeriesModule { }
