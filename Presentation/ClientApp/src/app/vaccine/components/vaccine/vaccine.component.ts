import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/Models/vaccine.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Student } from 'src/app/Models/student.model';
import { StudentService } from 'src/app/services/student.service';
import { VaccineService } from 'src/app/services/vaccine.service';

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
  idStudent: string;

  constructor(
    private vaccineService: VaccineService,
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
    this.vaccine.idVaccine = '';


    this.formGroupVaccine = this.formBuilder.group({
      vaccineType: [this.vaccine.vaccineType, [Validators.required, this.validateVaccineType]],
      dateOfVaccine: [this.vaccine.dateOfVaccine, Validators.required],
      idVaccine: [this.vaccine.idVaccine, Validators.required]
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
    this.vaccine = this.formGroupVaccine.value;
    this.vaccine.idStudent = this.idStudent;
    const dateOfBorn = new Date(this.student.dateOfBorn);
    const dateOfVaccine = new Date(this.vaccine.dateOfVaccine);

    console.log(this.student.dateOfBorn);
    console.log(this.vaccine.dateOfVaccine);


      const timeDiff = Math.abs(dateOfVaccine.getTime() - dateOfBorn.getTime());
      this.vaccine.age  = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365).toString();
    console.log(this.vaccine);
    this.vaccineService.post(this.vaccine).subscribe(v => {
      if (v != null) {
        alert('Vacuna Registrada...!');
      }
      console.log(v);
    });
  }

  shared() {
    this.idStudent = this.formGroupStudent.value.identification;
    this.studentService.getStudent(this.idStudent).subscribe(s => {
      if (s != null) {
        this.formGroupStudent.get('name').setValue(s.name);
        this.formGroupStudent.get('nameInstitute').setValue(s.nameInstitute);
        this.formGroupStudent.get('nameInstitute').setValue(s.nameInstitute);
        this.student = s;
        console.log(this.student);
      } else {
        alert('El estudiante no existe..!');
      }
    });
  }

}
