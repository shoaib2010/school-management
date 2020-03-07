import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { 
    path: '',
    data:{ title: 'Admin'},
    children:[
      {
        path:'',
        redirectTo: 'role'
      },
      {
        path: 'role',
        component: RoleComponent,
        data:{ tiltle: "Role"}
      },
      {
        path: 'employee',
        component: EmployeeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
