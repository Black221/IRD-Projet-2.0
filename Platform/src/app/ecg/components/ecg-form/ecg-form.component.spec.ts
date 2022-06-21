import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgFormComponent } from './ecg-form.component';

describe('EcgFormComponent', () => {
  let component: EcgFormComponent;
  let fixture: ComponentFixture<EcgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcgFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
