import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-two',
  templateUrl: './debounce-two.component.html',
})
export class DebounceTwoComponent implements AfterViewInit {
  public input = new FormControl('');
  public debouncedValue: string = '';

  // REACTIVE FORMS APROACH

  ngAfterViewInit(): void {
    this.input.valueChanges
      .pipe(debounceTime(2000))
      .subscribe((valueChanged) => {
        console.log(valueChanged);
        this.debouncedValue = valueChanged;
      });
  }
}
