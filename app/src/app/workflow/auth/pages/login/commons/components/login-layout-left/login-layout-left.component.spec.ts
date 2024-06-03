import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutLeftComponent } from './login-layout-left.component';

describe('LoginLayoutLeftComponent', () => {
  let component: LoginLayoutLeftComponent;
  let fixture: ComponentFixture<LoginLayoutLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLayoutLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLayoutLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
