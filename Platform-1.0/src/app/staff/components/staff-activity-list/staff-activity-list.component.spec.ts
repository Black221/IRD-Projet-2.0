import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffActivityListComponent } from './staff-activity-list.component';

describe('StaffActivityListComponent', () => {
  let component: StaffActivityListComponent;
  let fixture: ComponentFixture<StaffActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffActivityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
