import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should call login user', () => {
    const spyOnPost = spyOn(http, 'post');
    
    const request = {
      username: 'user',  
      password: 'pass',
      rememberUser: true,
      recaptcha: '1234'
    };
    
    service.loginUser(request);
    
    expect(spyOnPost).toHaveBeenCalledWith(jasmine.any(String), request);
  })
});
