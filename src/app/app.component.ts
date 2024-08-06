import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaymentDetailsComponent,UserRegistrationComponent,NgIf],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'PaymentApp';
  registration: boolean = true
  cardData : boolean = false
}
  
