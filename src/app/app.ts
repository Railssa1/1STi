import { Component, signal } from '@angular/core';
import { SearchWeather } from "./components/search-weather/search-weather";

@Component({
  selector: 'app-root',
  imports: [SearchWeather],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
}
