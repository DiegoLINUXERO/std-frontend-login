import { Component, OnInit, TemplateRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NgxCaptchaModule, ReCaptchaV3Service } from 'ngx-captcha';

import { StdAlertComponent } from 'src/app/shared/components/std-alert/std-alert.component';

import { LoginPresenter } from '../../../login.presenter';
import { LoginService } from '../../services/api/login.service';
import { ILoginUserRequest } from '../../models/requests/login-user-request.interface';
import { ILoginUserResponse, ILoginUserResponseError } from '../../models/responses/login-user-response.interface';
import { RECAPTCHA_KEY } from '../../constants/recaptcha.constants';
import { Router } from '@angular/router';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';
import { ChannelInfoService } from '../../services/api/info.service';

@Component({
  selector: 'std-login-body',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxCaptchaModule,
    StdAlertComponent,
    StdDirectivesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginPresenter, LoginService],
  templateUrl: './login-body.component.html',
  styleUrl: './login-body.component.scss'
})
export class LoginBodyComponent implements OnInit {
  @ViewChild('noLogin2AttemptsLeft', { static: true }) noLogin2AttemptsLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('noLogin1AttemptLeft') noLogin1AttemptLeftTpl!: TemplateRef<HTMLElement>;
  @ViewChild('contactUs') contactUsTpl!: TemplateRef<HTMLElement>;

  visiblePassword = false;
  isLoginIn = false;
  disabledButton = false;
  caseShowAlert = '';
  msghowAlert = '';
  showToolTip = true;
  showModal = false;
  title = '¡Oh, no! Parece que hubo un error';
  errorRetry?: number;
  codeError = '';
  sizeModal = 'm';

  constructor(
    public loginPresenter: LoginPresenter,
    public loginService: LoginService,
    public channelInfoService: ChannelInfoService,
    public reCaptchaV3Service: ReCaptchaV3Service,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRecaptcha();
    this.getUserChannelInfo();
  }

  initRecaptcha() {
    this.reCaptchaV3Service.execute(
      RECAPTCHA_KEY,
      'loginpage',
      (token) => this.loginPresenter.recaptcha.setValue(token),
      { useGlobalDomain: false }
    );
  }

  async onSubmit() {
    this.caseShowAlert = '';
    this.showToolTip = true;

    if (this.loginPresenter.form.invalid) {
      return;
    }

    this.isLoginIn = true;
    const request: ILoginUserRequest = {
      username: this.loginPresenter.username.value as string,
      password: this.loginPresenter.password.value as string,
      rememberUser: this.loginPresenter.rememberUser.value as boolean,
      recaptcha: this.loginPresenter.recaptcha.value as string
    };

    await this.sleep(1500);

    this.loginService.loginUser(request).subscribe(
      (response: ILoginUserResponse) => {
        this.loginOkResponse(response);
        this.isLoginIn = false;
      },
      (error: ILoginUserResponseError) => {
        this.isLoginIn = false;
        this.loginErroResponse(error);
      }
    );
  }

  loginOkResponse(response: ILoginUserResponse) {
    console.log(response);
    // "credentialOwner": {
    //   "isFirstLogin": true,
    //   "retry": 0,
    //   "success": true
    // },
    // "sessionToken": {
    //   "auth": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxMjM0NTZ9.RB2kQH2N05Km1U2TCVccZ-lN72NdeZ82tJClpPj2lN8",
    //   "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxMjM0NTZ9.i0cMwI_NaKfNZ6BlOpM8fnJaOcwFxRm8mZyUfX9bUjU"
    // }

    const {
      credentialOwner: { isFirstLogin, success, retry }
    } = response;

    this.errorRetry = retry;
    console.log(retry);
    // case 1: Usuario nuevo 4 Digitos [newUser]
    // Se va  cambaio de pasword
    if (isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/set-password');
    }

    // case 3 y 6: Usuario nuevo 8 Digitos [userNotNew]
    // Se va al home
    if (!isFirstLogin && success && retry == 0) {
      this.router.navigateByUrl('/home');
    }

    // case 2, 7: Autorización fallida, contraseña inválida en primer intento.[userPassFailed]
    // queda en login

    // case 2, 7: Autorización fallida, contraseña inválida en segundo intento.[userPassFailed2]
    // queda en login

    // case 4 y 15: Autorización fallida, contraseña inválida en tercer intento y se bloquea el usuario [userPassFailed3]
    // queda en login

    // case 15: Autorización fallida, usuario bloqueado [userBloqued]
    // queda en login

    // case 16: Intento de inicio de sesión por usuario inhabilitado [userError2]
    // queda en login

    // case X: Autorización fallida, usuario no encontrado [userError]
    // queda en login

    if (isFirstLogin && success) {
      return;
    }

    if (retry === 1) {
      this.showModal = true;
      this.caseShowAlert = 'reintend';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend1');
    }

    if (retry === 2) {
      this.showModal = true;
      this.caseShowAlert = 'reintend';
      this.msghowAlert = this.loginPresenter.getAlertError('reintend2');
    }

    if (retry === -1) {
      this.showModal = true;
      this.caseShowAlert = 'blocked';
      this.msghowAlert = this.loginPresenter.getAlertError('blocked');
      this.loginPresenter.form.reset();
      this.loginPresenter.form.controls['username'].disable();
      this.loginPresenter.form.controls['password'].disable();
      this.disabledButton = true;
    }
  }

  closeModal() {
    this.showModal = false;
    this.loginPresenter.form.controls['username'].setValue('');
    this.loginPresenter.form.controls['password'].setValue('');
  }

  loginErroResponse(errorResponse: ILoginUserResponseError) {
    // {
    //   "errors": [
    //     {
    //       "code": "ERR461",
    //       "message": "RESOURCE NOT FOUND",
    //       "level": "ERROR",
    //       "description": "Nombre de usuario y/o contraseña errados"
    //     }
    //   ]
    // }

    console.log('error');
    console.log(errorResponse);
    const {
      error: {
        error: { code, description }
      }
    } = errorResponse;

    this.codeError = code;
    // Invalid login
    if (code === 'ERR461') {
      const content = description;
      this.showToolTip = false;
    }

    if (code === 'ERR462') {
      this.caseShowAlert = 'blocked';
      this.msghowAlert = this.loginPresenter.getAlertError('blocked');
      this.loginPresenter.form.controls['username'].disable();
      this.loginPresenter.form.controls['password'].disable();
      this.disabledButton = true;
    }
  }

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  recoverPassword() {}

  getUserChannelInfo() {
    this.channelInfoService.getChannnelInfo().subscribe(
      (response) => {},
      (error: ILoginUserResponseError) => {}
    );
  }

  async sleep(time: number) {
    return await new Promise((resolve) => setTimeout(resolve, time));
  }
}
