import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from '../../../shared/components/custom-input/app-input.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AppInputModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [LoginComponent],


})
export class LoginModule { }
