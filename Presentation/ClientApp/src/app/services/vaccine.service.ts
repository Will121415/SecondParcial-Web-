import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Vaccine } from '../Models/vaccine.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { this.baseUrl = baseUrl; }


  post(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(this.baseUrl + 'api/Vaccine', vaccine)
           .pipe(tap(_ => this.handleErrorService.log('vacuna guardada')),
            catchError(this.handleErrorService.handleError<Vaccine>('Error al guardar la vacuna', null))
 );
 }

 get(): Observable<Vaccine[]> {
   return this.http.get<Vaccine[]>(this.baseUrl + 'api/Vaccine').
     pipe(tap(_ => this.handleErrorService.log('Vacuna consultada')),
     catchError(this.handleErrorService.handleError<Vaccine[]>('Error al consultar las vacunas', null))
 );
 }
}
