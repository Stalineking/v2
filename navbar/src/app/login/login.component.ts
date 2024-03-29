import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainsComponent } from '../mains/mains.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MainsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showLoginForm: boolean = false;
  showForgetPasswordCard: boolean = false;
  showResendEmailCard: boolean = false;
  clicked: boolean = false;

  ResendEmail(){
    this.showResendEmailCard = !this.showResendEmailCard;
    this.showForgetPasswordCard =false;
  }
  toggleForgetPasswordCard() {
    this.showLoginForm =false;
    this.showForgetPasswordCard = !this.showForgetPasswordCard;
   
  }
  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.clicked = !this.clicked;

  }
  closeLoginForm() {
    if (this.showLoginForm) {
      this.showLoginForm = false;
      this.clicked = false;

    }
  }

}
