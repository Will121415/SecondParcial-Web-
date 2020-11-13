import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { HomeModule } from './home/home.module';
import { ConsultVaccineModule } from './consult-vaccine/consult-vaccine.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NavMenuModule,
    HomeModule,
    ConsultVaccineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
