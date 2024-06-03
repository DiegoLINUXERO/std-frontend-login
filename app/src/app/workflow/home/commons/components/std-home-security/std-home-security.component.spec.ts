import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomeSecurityComponent } from './std-home-security.component';

describe('StdHomeSecurityComponent', () => {
  let component: StdHomeSecurityComponent;
  let fixture: ComponentFixture<StdHomeSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdHomeSecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdHomeSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
