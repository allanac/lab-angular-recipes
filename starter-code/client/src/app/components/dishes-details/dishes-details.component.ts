import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { RecipiesApiService } from '../../services/recipies-api.service';

@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css']
})
export class DishesDetailsComponent implements OnInit {

  dishInfo: any = {};

  constructor( private activatedThang: ActivatedRoute,
               private recipesThang: RecipiesApiService,
               private routerThang: Router ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myParams) => {
        this.recipesThang.getDishDetails(myParams.dishId)
          .subscribe((theDishFromApi) => {this.dishInfo = theDishFromApi});
    });
  }

}
