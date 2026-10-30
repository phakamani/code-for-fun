import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, SchemaPathTree, validate } from '@angular/forms/signals';

function integerRule(path: SchemaPathTree<{ insertedNumber: number}>) {
  validate(path.insertedNumber, ({value}) =>
        Number.isInteger(value())
        ? null
        : { kind: 'integer', message: 'Number must be an integer'});
}

function uniqueNumberRule (
    path: SchemaPathTree<{insertedNumber : number}[]>
  ) {
  validate(path, ({value}) => {
    const nums = value().map(n => n.insertedNumber);
    return nums
      .some(n => nums
        .filter(x => x === n).length === 1) 
        ? null
        : {
          kind: 'noUnique', 
          message: 'At least one number should appear only once'
        }
  })
}

@Component({
  imports: [FormField],
  selector: 'app-bitwise-operators-container',
  styleUrl: './bitwise-operators-container.scss',
  templateUrl: './bitwise-operators-container.html',
})
export class BitwiseOperatorsContainer {
  readonly model = signal({numbers: [{insertedNumber: 0}]});

  readonly numbersForm = form(this.model, (path) => {
    applyEach(path.numbers, integerRule)
    uniqueNumberRule(path.numbers)
  });

  addNumber(): void {
    this.model.update(m => (
      {
        numbers: [...m.numbers, {insertedNumber: 0}]
      }
    ))
  }
}
