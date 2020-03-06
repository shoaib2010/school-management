import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../../shared/common/base.component';
import { LoginHelper } from './login.helprt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  dataForm: FormGroup;
  // submitted: boolean;
  // errors: string;

  // loginForm = new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   password: new FormControl('', [Validators.required])
  // });

  constructor(private fb: FormBuilder) {
    super();
    // this.submitted = false;
    // this.errors = '';
    this.validationMessages = LoginHelper.setValidationMessages();
    this.dataForm = LoginHelper.setValidationRules(fb);
  }

  ngOnInit(): void {
    this.valueChanges(this.dataForm);
  }

  // get f() {
  //   return this.loginForm.controls;
  // }

  private submit() {
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    //   this.errors = "Invalid user name or password";
    //   return;
    // }
    // const values = this.loginForm.value;
  }

  actions = {
    onSubmit: () => {
      this.submit()
    }
  }

}
