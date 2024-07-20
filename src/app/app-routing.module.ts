import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { HomeComponent } from './components/home/home.component';
// Import your recipe detail component

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
