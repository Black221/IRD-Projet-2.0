import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificPathologyComponent } from './specific-pathology.component';

describe('SpecificPathologyComponent', () => {
  let component: SpecificPathologyComponent;
  let fixture: ComponentFixture<SpecificPathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificPathologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
