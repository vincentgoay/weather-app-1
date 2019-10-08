import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather(city: string, api: string){
    console.log("Get Weather...");
  }
}
