import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// interfaces
import { ILogin } from './commons/models/ui/login.interface';

// errors
import * as errorsCatelogue from './login.errors';
import { Keyboard } from './commons/models/responses/info-response.interfaces';


@Injectable()
export class LoginPresenter {
  keyboard: Keyboard = {} as Keyboard;
  errorsCatelogue = errorsCatelogue;

  username = new FormControl('');
  password = new FormControl('');
  rememberUser = new FormControl(false);
  recaptcha = new FormControl('');

  form: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    rememberUser: this.rememberUser,
    recaptcha: this.recaptcha,
  });

  constructor() {
    this.addFormValidators();
  }

  private addFormValidators(): void {
    this.username.setValidators([Validators.required]);
    this.password.setValidators([Validators.required]);
    this.rememberUser.setValidators([]);
    this.recaptcha.setValidators([Validators.required]);
  }

  initForm(dataLogin: ILogin): void {
    this.form.reset();

    this.username.setValue(dataLogin.username);
    this.password.setValue(dataLogin.password);
    this.rememberUser.setValue(dataLogin.rememberUser);
    this.recaptcha.setValue(dataLogin.recaptcha);

    this.form.updateValueAndValidity();
  }

  getAlertError(typeError: string): string {
    let msg = '';

    switch (typeError) {
      case 'reintend1':
        msg = '<b>Tienes 1 intentos más</b>, caso contrario, por tu seguridad bloquearemos tu acceso a la plataforma.';
        break;
      case 'reintend2':
        msg = '<b>Tienes 2 intento más</b>, caso contrario, por tu seguridad bloquearemos tu acceso a la plataforma.';
        break;
      case 'blocked':
        msg =
          'Por tu seguridad, tu acceso <b>ha sido bloqueado</b>.<br>Recupéralo escribiéndonos a <b>clienteservice@santander.com.pe</b>.';
        break;

      default:
        msg = '';
        break;
    }

    return msg;
  }

  setKeyBoard(keyboard: Keyboard){
    this.keyboard = keyboard;
  } 
  getSeed(){
    return this.keyboard.seed;
  }
  getPasswordHash(password: string): string[] {
    let arrayOfHash = [];
    for (let char of password) {
      let hash = this.keyboard.keys.find(item => item.value === char); 
      arrayOfHash.push(hash?.id);
    }
    return arrayOfHash as [];
  }

}
