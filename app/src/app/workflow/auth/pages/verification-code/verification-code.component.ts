import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFooterComponent } from '../login/commons/components/login-footer/login-footer.component';
import { CountdownModule } from 'src/app/shared/components/std-countdown/std-countdown.module';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VerificationCodePresenter } from './verification-code.presenter';
import { StdDirectivesModule } from 'src/app/shared/directives/directives.module';

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

  constructor(private router: Router, public verificationCodePresenter: VerificationCodePresenter) {}

  ngOnInit() {}

  fGroup = this._fBuilder.nonNullable.group({
    inputCod: ['', [Validators.required, Validators.minLength(1)]],
    countdown: 5
  });

  onClickFinalize() {
    if (this.verificationCodePresenter.form.invalid) {
      // change class desibled
    } else {
      this.router.navigateByUrl('/login');
    }
    // const inputs = this.fGroup.controls.inputs;
    // const countdown = this.fGroup.controls.countdown;
  }
}
