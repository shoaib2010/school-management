import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder,FormArray } from '@angular/forms';
import { BaseComponent } from '../../../../shared/common/base.component';
import { RoleHelper } from './role.helper';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent extends BaseComponent implements OnInit {

  constructor(private fb:FormBuilder) {
    super();
    this.validationMessages = RoleHelper.setValidationMessage();
    this.dataForm = RoleHelper.setValidationRule(fb);

   }

   dataForm: FormGroup;

  ngOnInit() {
    this.valueChanges(this.dataForm);
  }


  actions = {
    onSubmit:()=>{
      console.log('dataForm', this.dataForm);
      
    }
  }

  get roles() {
    return this.dataForm.get('roles') as FormArray;
  }

  addRole() {
    this.roles.push(this.fb.group({role_name:['',[Validators.required]]}));
  }

  deleteRole(index) {
    this.roles.removeAt(index);
  }

  private submit(){
    debugger;
    var _roles = this.roles.value;
  }

}
