import { Component, computed, input, model } from '@angular/core';
import { FieldTree, FormField, FormValueControl, ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'ind-input',
  styles: `
    .form-control {
      padding-block-start: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    input,
    textarea {
      padding: 0.5rem;
      font-size: 1rem;
      color: var(--color-primary-hot);
      background-color: var(--color-background-primary);
      border: none;
      border-block-end: 2px solid var(--color-primary);
      border-radius: 4px;

      &:focus-visible {
        outline: var(--color-primary) auto 1px;
        background-color: var(--color-background);
      }
    }

    span {
      font-size: 0.8rem;
      color: var(--color-primary);
      margin-bottom: 0.2rem;
      position: relative;
      top: -2rem;
    }

    input:focus-visible + span,
    input:not(:placeholder-shown) + span {
      color: var(--color-primary-hot);
      top: -4rem;
    }

    .error {
      color: var(--color-tertiary);
      font-size: 0.8rem;
    }
  `,
  template: `
    <label [for]="id()" class="form-control">
      <input
        [type]="type()"
        [id]="id()"
        placeholder=" "
        // required for CSS :placeholder-shown pseudo-class to work
        [value]="value()"
        (input)="value.set($event.target.value)"
        (blur)="touched.set(true)"
      />
      <span>{{ label() }}</span>
    </label>

    @if (invalid() && touched()) {
      <p class="error">{{ errors()[0]?.message }}</p>
    }
  `,
})
export class Input implements FormValueControl<string> {
  readonly label = input.required<string>();
  readonly type = input('text');
  readonly id = computed(() => this.type() + Math.random().toString(36).substring(2, 5));

  readonly value = model('');
  readonly disabled = input(false);
  readonly required = input(false);
  readonly touched = model(false);
  readonly invalid = input(false);
  readonly errors = input<readonly ValidationError[]>([]);
}

@Component({
  imports: [Input, FormField],
  selector: 'ind-input-email',
  styles: ``,
  template: ` <ind-input [label]="label()" [type]="type()" [formField]="formField()"></ind-input> `,
})
export class InputEmail extends Input {
  override readonly type = input('email');
  override readonly label = input.required<string>();
  readonly formField = input.required<FieldTree<string>>();
}
