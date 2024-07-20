import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipeId!: number;
  recipe: any; // Replace with your recipe type

  constructor(private route: ActivatedRoute,private recipeService: RecipeService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.recipeId = +params.get('id'); 
      this.recipeService.getRecipeById(this.recipeId).subscribe(data => {
        this.recipe = data;
      });
    });
   
  }
  

}
