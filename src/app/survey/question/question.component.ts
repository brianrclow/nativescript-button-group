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
  disabled = false;
  onTouched: any = () => {};
  onChanged: any = () => {};

  selectAnswer(args) {
    var btn = args.object;

    this.onTouched(); // <-- mark as touched
    this.selected = btn.text;
    this.onChanged(btn.text); // <-- call function to let know of a change
    if (btn.text === 'Yes') {
      btn.backgroundColor = 'green';
    } else {
      btn.backgroundColor = 'red';
    }
  }

  writeValue(answer: string): void {
    this.selected = answer ?? 'No';
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
