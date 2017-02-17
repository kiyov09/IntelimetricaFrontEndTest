import { Injectable } from '@angular/core';

import { Restaurant } from './models/restaurant';

const mock_Restaurants: Restaurant[] = [
    {
        "id":"851f799f-0852-439e-b9b2-df92c43e7672",
        "rating":1,
        "name":"Barajas, Bahena and Kano",
        "contactInfo":{"webSiteUrl":"https://federico.com","email":"Anita_Mata71@hotmail.com","phone":"534 814 204"},
        "address":{"street":"82247 Mariano Entrada","city":"Mérida Alfredotown","state":"Durango","location":{"lat":19.440057053713137,"lng":-99.12704709742486}}
    },
    {
        "id":"4e17896d-a26f-44ae-a8a4-5fbd5cde79b0",
        "rating":0,
        "name":"Hernández - Lira",
        "contactInfo":{"webSiteUrl":"http://graciela.com.mx", "email":"Brandon_Vigil@hotmail.com","phone":"570 746 998"},
        "address":{"street":"93725 Erick Arroyo", "city":"Mateofurt","state":"Hidalgo","location":{"lat":19.437904276994995,"lng":-99.12865767750226}}
    },
    {
        "id":"c0ffd058-e773-47f1-974b-42d41cb555bf",
        "rating":3,
        "name":"Rendón - Elizondo",
        "contactInfo":{"webSiteUrl":"https://cristina.mx", "email":"Hugo.Casanova49@gmail.com","phone":"5866-337-812"},
        "address":{"street":"5518 Monserrat Explanada", "city":"Chignahuapan María","state":"Sinaloa","location":{"lat":19.43607059103484,"lng":-99.12978657319944}}
    },
    {
        "id":"c29082c4-4352-4517-9b4b-c45f86fc1830",
        "rating":2,
        "name":"Nájera - Chávez",
        "contactInfo":{"webSiteUrl":"https://pedro.gob.mx", "email":"Carlota31@hotmail.com","phone":"5532-129-406"},
        "address":{"street":"79224 Mariano Travesía", "city":"Nezahualcóyotl Timoteo","state":"Coahuila","location":{"lat":19.442486911665654,"lng":-99.12383325991955}}
    }
];

@Injectable()
export class RestaurantService {

    constructor() { }

    getRestaurants(): Promise<Restaurant[]> {
        return Promise.resolve(mock_Restaurants);
    }

}
