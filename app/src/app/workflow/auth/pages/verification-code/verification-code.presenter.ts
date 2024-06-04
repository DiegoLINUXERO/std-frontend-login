import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// interfaces
import { IVerificationCode } from './commons/models/ui/verification-code.interface';

// errors
import * as errorsCatelogue from './verification-code.errors';

@Injectable()
export class VerificationCodePresenter {
  errorsCatelogue = errorsCatelogue;

  pinCode = new FormControl('')
  countdown = new FormControl('')

  form: FormGroup = new FormGroup({
    pinCode: this.pinCode,
    countdown: this.countdown
  });

  constructor() {
    this.addFormValidators();
  }

  private addFormValidators(): void {
    this.pinCode.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(6)]);
  }

  initForm(dataVerification: IVerificationCode): void {
    this.form.reset();

    this.pinCode.setValue(dataVerification.pinCode);
    this.countdown.setValue('5');

    this.form.updateValueAndValidity();
  }

  getAlertError(typeError: string): string {
    let msg = '';

    switch (typeError) {
      case 'reintend1':
        msg = 'Caducidad del código de verificación recibido al correo autorizado luego de 5 minutos';
        break;
      case 'reintend2':
        msg = 'Generar nuevo código de verificación por expiración del antiguo';
        break;
      case 'blocked':
        msg =
          'Habilitación del botón nuevo código de verificación por ingreso de código invalido';
        break;

      default:
        msg = '';
        break;
    }

    return msg;
  }
}

