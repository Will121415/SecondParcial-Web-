import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/Models/vaccine.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Student } from 'src/app/Models/student.model';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  vaccine: Vaccine;
  student: Student;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { this.buildForm(); }

  ngOnInit() {
  }

  private buildForm() {
    this.vaccine = new Vaccine();
    this.student = new Student();

    this.vaccine.vaccineType = 'seleccionar...';
    this.vaccine.dateOfVaccine = '';

    this.student.identification = '';

    this.formGroup = this.formBuilder.group({
      vaccineType: [this.vaccine.vaccineType, [Validators.required, this.validateVaccineType]],
      dateOfVaccine: [this.vaccine.dateOfVaccine, Validators.required],
      identification: [this.student.identification, Validators.required]
    });

  }

  private validateVaccineType(control: AbstractControl) {
    const vaccineType = control.value;
    if (vaccineType !== 'seleccionar...' ) { return null; }
    return  {validatevaccineType: true, messagedovaccineType: 'debe seleccionar un tipo'};
  }
  get control() {
    return this.formGroup.controls;
  }

  add() {
    console.log(this.formGroup.value);
  }

}
