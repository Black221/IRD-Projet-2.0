import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyEcgListComponent } from './pathology-ecg-list.component';

describe('PathologyEcgListComponent', () => {
  let component: PathologyEcgListComponent;
  let fixture: ComponentFixture<PathologyEcgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologyEcgListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologyEcgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
