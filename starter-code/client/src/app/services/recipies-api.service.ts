import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RecipiesApiService {

  baseUrl: string="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllDishes(){
      return this.http.get(this.baseUrl + '/api/dishes/');
  }

  getDishDetails(dishId:string) {
      return this.http.get(this.baseUrl + '/api/dishes/' + dishId);
  }

}
