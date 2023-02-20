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
  options = [
    {
      answer: 'Yes',
    },
    { answer: 'No' },
  ];

  selected: string;
  touched = false;
  disabled: boolean;
  onTouched: any = () => {};
  onChanged: any = () => {};

  selectAnswer(args) {
    console.log('TOUCHED: selectAnswer');

    var btn = args.object;
    this.onTouched(); // <-- mark as touched
    this.selected = btn.text;
    this.onChanged(btn.text); // <-- call function to let know of a change
    if (btn.text === 'Yes') {
      btn.backgroundColor = 'green';
    } else if (btn.text === 'No') {
      btn.backgroundColor = 'red';
    }
    console.log('DISABLED?', this.disabled);
  }

  writeValue(answer: string): void {
    console.log('TOUCHED: writeValue');
    this.selected = answer;
  }
  registerOnChange(fn: any): void {
    console.log('TOUCHED: registerOnChange');
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    console.log('TOUCHED: registerOnTouched');
    this.onTouched = fn; // <-- save the function
  }
  setDisabledState(isDisabled: boolean): void {
    console.log('TOUCHED: setDisabledState');
    this.disabled = isDisabled;
  }
}
