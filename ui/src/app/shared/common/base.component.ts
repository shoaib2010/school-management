import { FormGroup } from '@angular/forms';
import { delay, distinctUntilChanged } from 'rxjs/operators'


export abstract class BaseComponent {

  formErrors: any;
  validationMessages: any;
  constructor() {
    this.formErrors = {};
    this.validationMessages = {};
  }


  valueChanges(formGroup: FormGroup) {
    formGroup.valueChanges.
    pipe(
      delay(500),
      distinctUntilChanged(),
    )
    .subscribe((result) => {
      console.log('valueChanges', result);
      this.validationErrors(formGroup);
    });
  }


  validationErrors(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key: string) => {
      const abstractControl = formGroup.get(key);
      if (abstractControl instanceof FormGroup) {
        this.validationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
      console.log('formErrors', this.formErrors);
    });
  }


}
