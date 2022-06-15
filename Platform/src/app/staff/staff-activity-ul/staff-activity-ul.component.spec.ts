import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffActivityUlComponent } from './staff-activity-ul.component';

describe('StaffActivityUlComponent', () => {
  let component: StaffActivityUlComponent;
  let fixture: ComponentFixture<StaffActivityUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffActivityUlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffActivityUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
