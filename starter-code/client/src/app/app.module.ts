import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesApiService } from './services/recipies-api.service';

import { AppComponent } from './app.component';
import { DishesListComponent } from './components/dishes-list/dishes-list.component';
import { DishesDetailsComponent } from './components/dishes-details/dishes-details.component';

const myRoutes: Routes = [
    {path:'', component: DishesListComponent},
    {path:'dishes/:dishId', component: DishesDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    DishesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [RecipiesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
