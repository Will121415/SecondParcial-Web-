import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {this.buildForm(); }

  ngOnInit() {
  }

  private buildForm() {
    this.student = new Student();

    this.student.documentType = 'seleccionar...';
    this.student.identification = '';
    this.student.name = '';
    this.student.dateOfBorn = '';
    this.student.nameInstitute = '';
    this.student.nameGuardian = '';

    this.formGroup = this.formBuilder.group({
      documentType: [this.student.documentType, [Validators.required, this.validateDocumentType]],
      identification: [this.student.identification, Validators.required],
      name: [this.student.name, Validators.required],
      dateOfBorn: [this.student.dateOfBorn, Validators.required],
      nameInstitute: [this.student.nameInstitute, Validators.required],
      nameGuardian: [this.student.nameGuardian, Validators.required]

    });
  }

  private validateDocumentType(control: AbstractControl) {
    const documentType = control.value;
    if (documentType !== 'seleccionar...' ) { return null; }
    return  {validatedocumentType: true, messagedocumentType: 'debe seleccionar una tipo'};
  }
  get control() {
    return this.formGroup.controls;
  }

  add() {
    this.studentService.post(this.student).subscribe(s => {
      if (s != null) {
        alert('Estudiante creado!');
        this.student = s;
      }
    });
  }
}
