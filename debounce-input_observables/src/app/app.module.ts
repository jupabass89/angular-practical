import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DebounceTwoComponent } from './debounce-inputs/reactive-forms/debounce-two.component';
import { DebounceInputComponent } from './debounce-inputs/template-driven/debounce-input.component';

@NgModule({
  declarations: [AppComponent, DebounceTwoComponent, DebounceInputComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
