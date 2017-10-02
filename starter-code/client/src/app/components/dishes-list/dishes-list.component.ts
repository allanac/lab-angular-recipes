import { Component, OnInit } from '@angular/core';

import { RecipiesApiService } from '../../services/recipies-api.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  dishes: any[] = [];

  constructor(private recipesThang:RecipiesApiService) { }

  ngOnInit() {
    this.recipesThang.getAllDishes()
      .subscribe(
        (dishesFromApi:any []) => {
            this.dishes = dishesFromApi;
            console.log(dishesFromApi);
        }
      );
  }

}
