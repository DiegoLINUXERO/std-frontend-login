import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAuthHeaderComponent } from './std-auth-header.component';

describe('StdAuthHeaderComponent', () => {
  let component: StdAuthHeaderComponent;
  let fixture: ComponentFixture<StdAuthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdAuthHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdAuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
