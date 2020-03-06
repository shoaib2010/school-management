import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    /* Initiate the form structure */
    this.roleForm = this.fb.group({
      roles: this.fb.array([this.fb.group({role_name:'',sub_role:''})])
    })
  }

  roleForm: FormGroup;

  get roles() {
    return this.roleForm.get('roles') as FormArray;
  }

  addRole() {
    this.roles.push(this.fb.group({role_name:'',sub_role:''}));
  }

  deleteRole(index) {
    this.roles.removeAt(index);
  }

  onSubmit(){
    debugger;
    var _roles = this.roles.value;
  }

}
