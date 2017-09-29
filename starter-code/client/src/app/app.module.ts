import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DishesService } from './services/dishes.service';
import { IngredientsService } from './services/ingredients.service';


import { AppComponent } from './app.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: RecipesListComponent },
  { path: 'home/:id', component: RecipeDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
