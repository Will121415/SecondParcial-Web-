import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'student/register',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'vaccine/register',
        loadChildren: () => import('./vaccine/vaccine.module').then(m => m.VaccineModule)
      },
      {
        path: 'consult',
        loadChildren: () => import('./consult-vaccine/consult-vaccine.module').then(m => m.ConsultVaccineModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
    ]
  }];

@NgModule({
  declarations: [],
 imports: [
   RouterModule.forRoot(routes)
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


