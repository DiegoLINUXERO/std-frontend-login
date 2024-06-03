import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHomeFooterComponent } from './std-home-footer.component';

describe('StdHomeFooterComponent', () => {
  let component: StdHomeFooterComponent;
  let fixture: ComponentFixture<StdHomeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdHomeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdHomeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
