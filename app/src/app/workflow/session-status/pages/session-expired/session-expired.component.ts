import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrl: './session-expired.component.scss'
})
export class SessionExpiredComponent {

  constructor(
    private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
