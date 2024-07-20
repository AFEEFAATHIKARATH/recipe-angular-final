import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTypeFilterComponent } from './meal-type-filter.component';

describe('MealTypeFilterComponent', () => {
  let component: MealTypeFilterComponent;
  let fixture: ComponentFixture<MealTypeFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealTypeFilterComponent]
    });
    fixture = TestBed.createComponent(MealTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
