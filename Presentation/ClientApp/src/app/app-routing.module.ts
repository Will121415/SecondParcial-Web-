import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
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
        path: 'counter',
        loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
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


