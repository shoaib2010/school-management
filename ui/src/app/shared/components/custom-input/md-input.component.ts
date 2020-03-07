import {Component, Input, ContentChild, AfterContentInit, HostBinding} from '@angular/core';
import { InputRefDirective } from '../../directives/input-ref.directive';
import { mdInputStyles } from './md-input.component.css';
import { commonCss } from './common/common.css';
import { defaultThemeCss } from './common/default-theme.css';

@Component({
    selector: 'app-md-input',
    template: `
        <i class="md-icon" [innerHtml]="icon"></i>
        <ng-content></ng-content>
    `,
    styles: [ commonCss, defaultThemeCss , mdInputStyles ]
})
export class AppMdInputComponent implements AfterContentInit {

    @Input()icon: string;

    @ContentChild(InputRefDirective)
    input: InputRefDirective;

    ngAfterContentInit() {
        if (!this.input) {
            console.error('the md-input needs an input inside its content');
        }
    }

    @HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }


}
