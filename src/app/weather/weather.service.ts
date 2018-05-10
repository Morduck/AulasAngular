import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getCurrentWeather(city, country){
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='.concat(city, ',', country, ',PT&units=metric&appid=ae209d6f2887646b8efb7f2c05f39b50');
    return this.http.get(url).map(res => res.json())
  }
}
