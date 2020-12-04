import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { HomeModule } from './home/home.module';
import { ConsultVaccineModule } from './consult-vaccine/consult-vaccine.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlertDialogModule } from './@base/alert-dialog/alert-dialog.module';
import { AlertDialogComponent } from './@base/alert-dialog/components/alert-dialog/alert-dialog.component';
import { FooterModule } from './footer/footer.module';
import { JwtInterceptor } from './services/jwt.interceptor';
import { LoginModule } from './login/login.module';

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
    ConsultVaccineModule,
    NoopAnimationsModule,
    AlertDialogModule,
    FooterModule,
    LoginModule
  ],
  entryComponents: [AlertDialogComponent],
  providers:
    [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
