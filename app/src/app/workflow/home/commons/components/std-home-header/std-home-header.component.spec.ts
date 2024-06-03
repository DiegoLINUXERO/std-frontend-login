import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomeHeaderComponent } from './std-home-header.component';

describe('StdHomeHeaderComponent', () => {
  let component: StdHomeHeaderComponent;
  let fixture: ComponentFixture<StdHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdHomeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
