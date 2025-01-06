import { Component } from '@angular/core';
import { SubscriptorComponent } from './subscriptor/subscriptor.component';

@Component({
  selector: 'app-root',
  imports: [ SubscriptorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular16+';
}
