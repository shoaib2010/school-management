import { Component, Input, ContentChild, HostBinding, AfterContentInit } from '@angular/core';
import { InputRefDirective } from '../../directives/input-ref.directive';
import { commonCss } from './common/common.css';
import { defaultThemeCss } from './common/default-theme.css';


@Component({
  selector: 'app-fa-input',
  template: `
      <!-- <i class="icon fa" [ngClass]="classes"></i> -->
      <!-- <i [ngClass]="classes"></i> -->
      Fardeen Ahmad
      <div class="input-group mb-4">
        <div class="input-group-prepend">
          <span class="input-group-text"><i [ngClass]="classes"></i></span>
        </div>
        <ng-content select="input"></ng-content>
      </div>

  `,
  styles: [commonCss, defaultThemeCss]
})
export class AppFaInputComponent implements AfterContentInit {

  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  ngAfterContentInit() {
    debugger;
    if (!this.input) {
      console.error('the fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    debugger;
    return this.input ? this.input.focus : false;
  }


  get classes() {
    const cssClasses = {};
    if (this.icon) {
      // cssClasses['fa-' + this.icon] = true;
      cssClasses[this.icon] = true;
    }

    return cssClasses;
  }

}
