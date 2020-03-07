import { FormBuilder, Validators } from '@angular/forms';

export class RoleHelper {
    static setValidationMessage() {
        return {
            'name':{
                'required':'Role name is required.'
            }
        }

    }
    static setValidationRule(fb: FormBuilder) {
        return fb.group({
            roles: fb.array([fb.group(name,['',[Validators.required]])])
        })
    }
}
