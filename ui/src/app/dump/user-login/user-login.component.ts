import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  
  submitted:boolean;
  errors:string;

  loginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(6)]),
    password : new FormControl('', [Validators.required])
  })

  constructor() {
    this.submitted = false;
    this.errors = '';
   }

  ngOnInit(): void {
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      this.errors = "Invalid user name or password";
      return;
    }
    var values = this.loginForm.value;
  }

}
