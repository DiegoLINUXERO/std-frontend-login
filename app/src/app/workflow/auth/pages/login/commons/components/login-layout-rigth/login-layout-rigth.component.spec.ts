import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginLayoutRigthComponent } from './login-layout-rigth.component';

describe('LoginLayoutRigthComponent', () => {
  let component: LoginLayoutRigthComponent;
  let fixture: ComponentFixture<LoginLayoutRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLayoutRigthComponent, NoopAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLayoutRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
