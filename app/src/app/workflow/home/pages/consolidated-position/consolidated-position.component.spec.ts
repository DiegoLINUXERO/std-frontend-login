import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedPositionComponent } from './consolidated-position.component';

describe('ConsolidatedPositionComponent', () => {
  let component: ConsolidatedPositionComponent;
  let fixture: ComponentFixture<ConsolidatedPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsolidatedPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolidatedPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
