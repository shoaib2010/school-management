import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../../shared/common/base.component';
import { LoginHelper } from './login.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    super();
    this.validationMessages = LoginHelper.setValidationMessages();
    this.dataForm = LoginHelper.setValidationRules(fb);
  }

  dataForm: FormGroup;

  actions = {
    onSubmit: () => {
      console.log('dataForm', this.dataForm);

      this.submit();
    }
  };

  ngOnInit(): void {
    this.valueChanges(this.dataForm);
  }

  private submit() {
    // this.submitted = true;
    // if (this.loginForm.invalid) {
    //   this.errors = "Invalid user name or password";
    //   return;
    // }
    // const values = this.loginForm.value;
  }

}
