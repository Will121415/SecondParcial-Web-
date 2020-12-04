import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get control() {
    return this.formGroup.controls;
  }

  onLogin() {
    if (this.formGroup.invalid) {
      return;
    }

    this.authService.login(this.control.userName.value, this.control.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
         console.log(error);
        });

    console.log( this.control.userName.value + ' ' + this.control.password.value);
  }

}
