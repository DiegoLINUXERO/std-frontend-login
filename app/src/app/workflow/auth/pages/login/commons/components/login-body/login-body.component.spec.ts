import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { defer, of } from 'rxjs';

import { LoginBodyComponent } from './login-body.component';
import { LoginService } from '../../services/api/login.service';

describe('LoginBodyComponent', () => {
  let component: LoginBodyComponent;
  let fixture: ComponentFixture<LoginBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginBodyComponent,

        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        LoginService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should execute recaptchat on init', () => {
    const spyOnRecaptcha = spyOn(component, 'initRecaptcha').and.stub();
    
    component.ngOnInit();
    
    expect(spyOnRecaptcha).toHaveBeenCalled();
  });
  
  it('should call recaptcha', fakeAsync(() => {
    component.reCaptchaV3Service.execute = (_key, _pageName, callback) => {
      const mockToken = '1234';
      callback(mockToken); 
    };
    
    component.initRecaptcha();
    
    tick(100);
    
    expect(component.loginPresenter.recaptcha.value).toBe('1234');
  }));
  
  it('should execute submit when form is invalid', () => {
    const spyOnLoginUser = spyOn(component.loginService, 'loginUser').and.stub();
    
    component.onSubmit();
    
    expect(spyOnLoginUser).not.toHaveBeenCalled();
  });
  
  it('should execute submit when form is valid', () => {
    const successResponse = of({token: 'myToken'});
    
    const spyOnLoginUser = spyOn(component.loginService, 'loginUser').and.returnValue(successResponse);
    
    component.loginPresenter.initForm({
      username: 'user',  
      password: 'pass',
      rememberUser: true,
      recaptcha: '1234'
    });
    
    component.onSubmit();
    
    expect(spyOnLoginUser).toHaveBeenCalled();    
    expect(component.isLoginIn).toBe(false);
  });
  
  it('should execute submit when service failed', fakeAsync(() => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
  
    const spyOnLoginUser = spyOn(component.loginService, 'loginUser').and.returnValue(asyncError(errorResponse));
    
    component.loginPresenter.initForm({
      username: 'user',  
      password: 'pass',
      rememberUser: true,
      recaptcha: '1234'
    });
    
    component.onSubmit();
    
    expect(spyOnLoginUser).toHaveBeenCalled();
    expect(component.isLoginIn).toBe(true);
    
    tick();
    
    expect(component.isLoginIn).toBe(false);
  }));
  
  it('show toggle visible password', () => {
    component.visiblePassword = false;
    
    component.togglePassword();
    
    expect(component.visiblePassword).toBe(true);
  });
  
  it('should recover password', () => {
    component.recoverPassword();
  });
});

function asyncError<T>(errorResponse: HttpErrorResponse) {
  return defer(() => Promise.reject(errorResponse));
}

