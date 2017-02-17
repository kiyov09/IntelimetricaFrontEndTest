import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { MdListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list-component/restaurant-list-component.component';

import { RestaurantService } from './restaurant.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MdListModule.forRoot()
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
