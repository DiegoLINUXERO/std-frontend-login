import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-session-other-browser',
  templateUrl: './active-session-other-browser.component.html',
  styleUrl: './active-session-other-browser.component.scss'
})
export class ActiveSessionOtherBrowserComponent {

 constructor(
    private router: Router) {}

  goToHome() {
    this.router.navigate(['/home'])
  }
}
