import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEcgListComponent } from './patient-ecg-list.component';

describe('PatientEcgListComponent', () => {
  let component: PatientEcgListComponent;
  let fixture: ComponentFixture<PatientEcgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEcgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEcgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
