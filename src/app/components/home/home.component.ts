import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  recipes: any[] = [];
  filteredRecipes: any[] = [];
  searchTerm: string = '';
  mealType: string = '';

  constructor(private recipeService: RecipeService,private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes;
      this.filteredRecipes = data.recipes;
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  goToRecipe(recipeId: number) {
    this.router.navigate(['/recipes', recipeId]);
  }

  onFilter(mealType: string): void {
    this.mealType = mealType;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const matchesSearchTerm = this.searchTerm ? recipe.name.toLowerCase().includes(this.searchTerm) || recipe.cuisine.toLowerCase().includes(this.searchTerm) : true;
      const matchesMealType = this.mealType.toLowerCase() != 'all' ? recipe.mealType.some((type: any) => type.toLowerCase() === this.mealType.toLowerCase()) : true;
      return matchesSearchTerm && matchesMealType;
    });
  }

    scrollToBottom():void{
      const element = document.getElementById('mainRecepie');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn("Element with ID 'mainRecepie' not found.");
      }
    }
    
}
