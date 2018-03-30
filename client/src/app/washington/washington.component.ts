import { Component, OnInit } from '@angular/core';
import { WeatherService }    from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  name: String;
  humidity;
  temperature_average;
  temperature_high;
  temperature_low;
  status;
  constructor(private _weatherservice: WeatherService) { }

  ngOnInit() {
    this.washington_weather();
  }

washington_weather() {
    let observable = this._weatherservice.washington_weather();
    observable.subscribe( (data) => {
      const city = data.json();
      this.name = city['name'];
      this.humidity = city['main']['humidity'] + "%";
      this.temperature_average = Math.floor(1.8*(city['main']['temp']) - 459.67) + "°";
      this.temperature_high = Math.floor(1.8*(city['main']['temp_max']) - 459.67) + "°";
      this.temperature_low = Math.floor(1.8*(city['main']['temp_min']) - 459.67) + "°";
      this.status = city['weather'][0]['description'];
    });
  };
};
