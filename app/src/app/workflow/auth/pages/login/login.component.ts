import { Component } from '@angular/core';

import { LoginLayoutLeftComponent } from './commons/components/login-layout-left/login-layout-left.component';
import { LoginLayoutRigthComponent } from './commons/components/login-layout-rigth/login-layout-rigth.component';
import { LoginLayoutBottomModule } from './commons/components/login-layout-bottom/login-layout-bottom.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayoutLeftComponent,
    LoginLayoutRigthComponent,
    LoginLayoutBottomModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
