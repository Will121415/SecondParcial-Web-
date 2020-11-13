import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultVaccineComponent } from './components/consult-vaccine/consult-vaccine.component';


const routes: Routes = [
  { path: '', component: ConsultVaccineComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ConsultVaccineRoutingModule { }
