import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLayoutBottomComponent } from './login-layout-bottom.component';

describe('LoginLayoutBottomComponent', () => {
  let component: LoginLayoutBottomComponent;
  let fixture: ComponentFixture<LoginLayoutBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginLayoutBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLayoutBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
