import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DebounceTwoComponent } from './debounce-inputs/reactive-forms/debounce-two.component';
import { DebounceInputComponent } from './debounce-inputs/template-driven/debounce-input.component';
import { SubscriberComponent } from './subjects-observables/pokemon-subscription/subscriber.component';
import { PokemonSuscriptionMainComponent } from './subjects-observables/pokemon-subscription/pokemon-suscription-main/pokemon-suscription-main.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceInputComponent,
    DebounceTwoComponent,
    SubscriberComponent,
    PokemonSuscriptionMainComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
