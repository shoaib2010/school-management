import { FormBuilder, Validators } from '@angular/forms';

export class LoginHelper {


  static setValidationMessages() {
    return {
      'userName': {
        'required': 'User Name is required.',
        'minlength': 'User Name must be greater than 4 characters',
        'maxlength': 'User Name must be less than 10 characters.',
      },
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password must be greater than 5 characters',
        'maxlength': 'Password must be less than 15 characters.',
      }
    };
  }

  static setValidationRules(fb: FormBuilder) {
    return fb.group({
      userName: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
    });
  }


}
