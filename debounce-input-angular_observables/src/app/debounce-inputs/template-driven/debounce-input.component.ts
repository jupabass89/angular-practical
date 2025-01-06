import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-input',
  templateUrl: './debounce-input.component.html',
})
export class DebounceInputComponent implements AfterViewInit {
  @ViewChild('form') form!: NgForm;
  public debouncedValue: string = '';

  // TEMPLATE DRIVEN FORMS APROACH

  ngAfterViewInit(): void {
    this.form.valueChanges?.pipe(debounceTime(2000)).subscribe(({ input }) => {
      console.log('debounced!', input);
      this.debouncedValue = input;
    });
  }
}
