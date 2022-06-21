import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgItemComponent } from './ecg-item.component';

describe('EcgItemComponent', () => {
  let component: EcgItemComponent;
  let fixture: ComponentFixture<EcgItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcgItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcgItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
