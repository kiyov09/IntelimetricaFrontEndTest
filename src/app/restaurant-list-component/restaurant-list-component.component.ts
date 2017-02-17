import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';

@Component({
    selector: 'app-restaurant-list-component',
    templateUrl: './restaurant-list-component.component.html',
    styleUrls: ['./restaurant-list-component.component.css']
})
export class RestaurantListComponent implements OnInit {

    restaurants: Restaurant[] = [];

    constructor(private restaurantSrv: RestaurantService) { }

    ngOnInit() {
        this.restaurantSrv.getRestaurants()
            .then(restaurants => {
                console.log(restaurants);
                this.restaurants = restaurants;
            })
    }

}
