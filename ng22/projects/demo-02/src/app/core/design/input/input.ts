import { Component, computed, input, model } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'ind-input',
  styles: ``,
  template: `
    <label [for]="id()" class="form-control">
      <span>{{ label() }}</span>
      <input
        [type]="type()"
        [id]="id()"
        placeholder=" " // required for CSS :placeholder-shown pseudo-class to work
        [value]="value()"
        (input)="value.set($event.target.value)"
        (blur)="touched.set(true)"
      />
    </label>

    @if (invalid() && touched()) {
      <span class="error">{{ errors()[0]?.message }}</span>
    }
  `,
})
export class Input implements FormValueControl<string> {
  readonly label = input.required<string>();
  readonly type = input('text');
  readonly id = computed(() => this.type() + Math.random().toString(36).substring(2, 5));

  readonly value = model.required<string>();
  readonly disabled = input.required<boolean>();
  readonly required = input.required<boolean>();
  readonly touched = model.required<boolean>();
  readonly invalid = input.required<boolean>();
  readonly errors = input.required<readonly ValidationError[]>();
}
