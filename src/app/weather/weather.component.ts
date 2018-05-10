import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  imgPath: string;

  constructor(private api: WeatherService) { }

  ngOnInit() {
    this.imgPath = 'http://openweathermap.org/img/w/';
    this.initWeather('Fafe', 'PT')
  }

  initWeather(city, country){
    this.api.getCurrentWeather(city, country).subscribe(
      data =>{
        this.weather = data;
        console.log(data)
      }
    )
  }
}
