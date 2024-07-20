import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meal-type-filter',
  templateUrl: './meal-type-filter.component.html',
  styleUrls: ['./meal-type-filter.component.css']
})
export class MealTypeFilterComponent {
  @Output() filter = new EventEmitter<string>();
  activeFilter: string = 'All';  // Track the currently active filter

  selectMealType(mealType: string): void {
    this.activeFilter = mealType;  // Update the active filter
    this.filter.emit(mealType);
  }

  isActive(mealType: string): boolean {
    return this.activeFilter === mealType;  // Check if the button is active
  }
}
