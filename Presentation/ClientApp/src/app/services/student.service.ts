import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Student } from '../Models/student.model';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) { this.baseUrl = baseUrl; }

    post(student: Student): Observable<Student> {
      return this.http.post<Student>(this.baseUrl + 'api/Student', student)
             .pipe(tap(_ => this.handleErrorService.log('estudiante guardado')),
              catchError(this.handleErrorService.handleError<Student>('Error al guardar el estudiante', null))
   );
   }
}
