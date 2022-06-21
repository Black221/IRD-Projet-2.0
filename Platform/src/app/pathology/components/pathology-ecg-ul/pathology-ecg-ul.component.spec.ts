import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyEcgUlComponent } from './pathology-ecg-ul.component';

describe('PathologyEcgUlComponent', () => {
  let component: PathologyEcgUlComponent;
  let fixture: ComponentFixture<PathologyEcgUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologyEcgUlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologyEcgUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
