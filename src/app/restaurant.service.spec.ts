/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantServiceService } from './restaurant-service.service';

describe('RestaurantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantServiceService]
    });
  });

  it('should ...', inject([RestaurantServiceService], (service: RestaurantServiceService) => {
    expect(service).toBeTruthy();
  }));
});
