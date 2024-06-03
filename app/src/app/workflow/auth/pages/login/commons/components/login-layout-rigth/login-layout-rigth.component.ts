import { Component } from '@angular/core';

import { LoginBodyComponent } from '../login-body/login-body.component';
import { LoginFooterComponent } from '../login-footer/login-footer.component';

@Component({
  selector: 'std-login-layout-rigth',
  standalone: true,
  imports: [LoginBodyComponent, LoginFooterComponent],
  templateUrl: './login-layout-rigth.component.html',
  styleUrl: './login-layout-rigth.component.scss',
})
export class LoginLayoutRigthComponent {}
