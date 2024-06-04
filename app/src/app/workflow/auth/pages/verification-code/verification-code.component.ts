import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VerificationCodePresenter } from './verification-code.presenter';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';
import { IChangePasswordRP, IChangePasswordRQ } from '../set-password/commons/models/change-password.intrefaces';
import { ChangePasswordService } from '../set-password/commons/services/change-password.service';

@Component({
  selector: 'std-verification-code',
  standalone: true,
  imports: [CommonModule, LoginFooterComponent, CountdownModule, ReactiveFormsModule, StdDirectivesModule],
  providers: [VerificationCodePresenter],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  private readonly _fBuilder = inject(FormBuilder);

  constructor(
    private router: Router, 
    public verificationCodePresenter: VerificationCodePresenter,
    public changePasswordService: ChangePasswordService
  ) {}

  ngOnInit() {}

  fGroup = this._fBuilder.nonNullable.group({
    inputCod: ['', [Validators.required, Validators.minLength(1)]],
    countdown: 5
  });

  onClickFinalize() {

    let request = {
      "seed": "14bf1deb-60c4-46c1-a2f1-adb501fe759e",
      "password": {
        "SelectedKey": [
          "f6381c2a-f7e0-4701-afd1-31995d65d0aa",
          "8de755b9-fa2f-4f77-a620-5b6089b6a23c",
          "8edc457a-3202-46ff-aae0-5fc031e16d20",
          "be57a30a-3d5c-4f71-9de4-7ea3c8487f20",
          "fb7eda63-81cf-4842-92cc-35a05d442235",
          "33b3a006-f100-4380-98e8-88c7e0d0765e",
          "d6558e8a-35d5-4bab-b4cc-268036d0d7fc",
          "2713f4d6-965f-4fa2-a0e0-e84cc846a551"
        ]
      },
      "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaVVzZXJuYW1lIiwiZXhwIjoxNjIxNzQ5MjUzfQ.GBt8nJG0o76MnPX8TvoEm7qOvzEXG6Dq8s_QO8tZEEg",
      "codeVerification": "1234567"
    } as IChangePasswordRQ;
    

    this.changePasswordService.changePassword(request).subscribe(
      (response: IChangePasswordRP) => {
        if (this.verificationCodePresenter.form.invalid) {
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      (error: IChangePasswordRP) => {
        console.log(error)
      }
    );

   
  }
}
