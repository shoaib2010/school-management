import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean;
  errors: string;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required])
  });

  constructor() {
    this.submitted = false;
    this.errors = '';
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  private submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.errors = "Invalid user name or password";
      return;
    }
    const values = this.loginForm.value;
  }

  actions = {
    onSubmit: () => {
      this.submit()
    }
  }

}
