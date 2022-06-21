import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologyItemComponent } from './pathology-item.component';

describe('PathologyItemComponent', () => {
  let component: PathologyItemComponent;
  let fixture: ComponentFixture<PathologyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
