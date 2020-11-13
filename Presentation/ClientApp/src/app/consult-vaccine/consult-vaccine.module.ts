import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultVaccineRoutingModule } from './consult-vaccine-routing.module';
import { ConsultVaccineComponent } from './components/consult-vaccine/consult-vaccine.component';
import { FormsModule } from '@angular/forms';
import { FilterVaccinePipe } from '../pipes/filter-vaccine.pipe';


@NgModule({
  declarations: [
    ConsultVaccineComponent,
    FilterVaccinePipe
  ],
  imports: [
    CommonModule,
    ConsultVaccineRoutingModule,
    FormsModule,
  ],
  exports: [FilterVaccinePipe]
})
export class ConsultVaccineModule { }
