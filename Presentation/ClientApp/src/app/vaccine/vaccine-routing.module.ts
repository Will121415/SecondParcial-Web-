import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VaccineComponent } from './components/vaccine/vaccine.component';


const routes: Routes = [
  { path: '', component: VaccineComponent }
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
export class VaccineRoutingModule { }
