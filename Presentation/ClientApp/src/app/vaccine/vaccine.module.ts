import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccineRoutingModule } from './vaccine-routing.module';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VaccineComponent
  ],
  imports: [
    CommonModule,
    VaccineRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VaccineModule { }
