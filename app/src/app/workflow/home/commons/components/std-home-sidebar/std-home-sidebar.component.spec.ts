import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomeSidebarComponent } from './std-home-sidebar.component';

describe('StdHomeSidebarComponent', () => {
  let component: StdHomeSidebarComponent;
  let fixture: ComponentFixture<StdHomeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdHomeSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdHomeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
