import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunitComponent } from './punit.component';

describe('PunitComponent', () => {
  let component: PunitComponent;
  let fixture: ComponentFixture<PunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
