import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrainerSubscriberComponent } from './trainer-subscriber/trainer-subscriber.component';

@NgModule({
  declarations: [AppComponent, TrainerSubscriberComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
