import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Helpful on Control Value Accessor: https://sreyaj.dev/custom-form-controls-controlvalueaccessor-in-angular
 */

const QUESTION_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QuestionComponent),
  multi: true,
};

@Component({
  selector: 'ns-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  providers: [QUESTION_CONTROL_VALUE_ACCESSOR],
})
export class QuestionComponent implements ControlValueAccessor {
  constructor() {}
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  selectAnswer(args, answer: string) {
    var btn = args.object;
    if (answer === 'yes') {
      btn.backgroundColor = 'green';
    } else {
      btn.backgroundColor = 'red';
    }
  }
}
