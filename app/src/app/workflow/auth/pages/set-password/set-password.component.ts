import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { StdMainHeaderComponent } from 'src/app/shared/components/std-main-header/std-main-header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [CommonModule, StdMainHeaderComponent, LoginFooterComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent {
  visiblePassword1 = false;
  visiblePassword2 = false;
  isLoginIn = false;
  showStrengthInfo = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  showPassword1() {
    this.visiblePassword1 = !this.visiblePassword1;
  }

  showPassword2() {
    this.visiblePassword2 = !this.visiblePassword2;
  }

  recoverPassword() {}

  onStrengthChanged(event: any) {}

  onSubmit() {
    this.router.navigateByUrl('/verification-code');
  }
}
