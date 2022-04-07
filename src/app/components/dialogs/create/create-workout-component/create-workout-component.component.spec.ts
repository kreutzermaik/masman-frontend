import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkoutComponentComponent } from './create-workout-component.component';

describe('CreateWorkoutComponentComponent', () => {
  let component: CreateWorkoutComponentComponent;
  let fixture: ComponentFixture<CreateWorkoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkoutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
