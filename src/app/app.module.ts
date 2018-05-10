import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { RacingDataService } from './car-parts/racing-data.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RacingDataService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
