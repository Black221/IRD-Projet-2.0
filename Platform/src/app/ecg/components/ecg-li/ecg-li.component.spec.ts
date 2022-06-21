import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcgLiComponent } from './ecg-li.component';

describe('EcgLiComponent', () => {
  let component: EcgLiComponent;
  let fixture: ComponentFixture<EcgLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcgLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcgLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
