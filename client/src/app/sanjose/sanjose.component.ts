import { Component, OnInit } from '@angular/core';
import { WeatherService }    from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  name: String;
  humidity;
  temperature_average;
  temperature_high;
  temperature_low;
  status;
  constructor(private _weatherservice: WeatherService) { }

  ngOnInit() {
    this.sanjose_weather();
  }

sanjose_weather() {
    let observable = this._weatherservice.sanjose_weather();
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
