import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MealTypeFilterComponent } from './components/meal-type-filter/meal-type-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { HomeComponent } from './components/home/home.component'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    SearchBarComponent,
    MealTypeFilterComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    RecipeDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
