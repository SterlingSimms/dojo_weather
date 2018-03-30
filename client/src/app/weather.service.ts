import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  constructor(private _http: Http) {
  }

  burbank_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&appid=3851a88777da4ee8ed033bdd16bcb849')
  }
  chicago_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=3851a88777da4ee8ed033bdd16bcb849')
  }
  dallas_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&appid=3851a88777da4ee8ed033bdd16bcb849')
  }
  sanjose_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Jose&appid=3851a88777da4ee8ed033bdd16bcb849')
  }
  seattle_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=3851a88777da4ee8ed033bdd16bcb849')
  }
  washington_weather(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=washington&appid=3851a88777da4ee8ed033bdd16bcb849')
  }

}
