import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEcgUlComponent } from './patient-ecg-ul.component';

describe('PatientEcgUlComponent', () => {
  let component: PatientEcgUlComponent;
  let fixture: ComponentFixture<PatientEcgUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEcgUlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEcgUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
