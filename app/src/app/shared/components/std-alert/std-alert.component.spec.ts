import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAlertComponent } from './std-alert.component';

describe('StdAlertComponent', () => {
  let component: StdAlertComponent;
  let fixture: ComponentFixture<StdAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
