import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFaInputComponent } from './fa-input.component';
import { InputRefDirective } from '../../directives/input-ref.directive';
import { AppMdInputComponent } from './md-input.component';



@NgModule({
    declarations: [InputRefDirective, AppFaInputComponent, AppMdInputComponent],
    imports: [
        CommonModule
    ],
    exports: [InputRefDirective, AppFaInputComponent, AppMdInputComponent],
})
export class AppInputModule { }
