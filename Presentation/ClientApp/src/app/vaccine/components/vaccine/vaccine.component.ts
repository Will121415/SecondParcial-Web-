import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/Models/vaccine.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Student } from 'src/app/Models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  vaccine: Vaccine;
  student: Student;
  formGroupVaccine: FormGroup;
  formGroupStudent: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
    ) { this.buildForm(); }

  ngOnInit() {
  }

  private buildForm() {
    this.vaccine = new Vaccine();
    this.student = new Student();

    this.vaccine.vaccineType = 'seleccionar...';
    this.vaccine.dateOfVaccine = '';


    this.formGroupVaccine = this.formBuilder.group({
      vaccineType: [this.vaccine.vaccineType, [Validators.required, this.validateVaccineType]],
      dateOfVaccine: [this.vaccine.dateOfVaccine, Validators.required],
    });

    this.student.identification = '';
    this.formGroupStudent = this.formBuilder.group({
      identification: [this.student.identification, Validators.required],
      name: [this.student.name],
      nameInstitute: [this.student.nameInstitute],
    });

  }

  private validateVaccineType(control: AbstractControl) {
    const vaccineType = control.value;
    if (vaccineType !== 'seleccionar...' ) { return null; }
    return  {validatevaccineType: true, messagedovaccineType: 'debe seleccionar un tipo'};
  }
  get controlVacinne() {
    return this.formGroupVaccine.controls;
  }

  get controlStudent() {
    return this.formGroupStudent.controls;
  }

  add() {
    console.log('Registrada');
  }

  shared() {
    const id = this.formGroupStudent.value.identification;
    this.studentService.getStudent(id).subscribe(s => {
      if (s != null) {
        this.formGroupStudent.get('name').setValue(s.name);
        this.formGroupStudent.get('nameInstitute').setValue(s.nameInstitute);
      } else {
        alert('El estudiante no existe..!');
      }
    });
  }

}
