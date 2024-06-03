import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSessionOtherBrowserComponent } from './active-session-other-browser.component';

describe('ActiveSessionOtherBrowserComponent', () => {
  let component: ActiveSessionOtherBrowserComponent;
  let fixture: ComponentFixture<ActiveSessionOtherBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveSessionOtherBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveSessionOtherBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
