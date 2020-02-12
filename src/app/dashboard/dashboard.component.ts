import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { PlaceService } from '../_services/marker.service';
import { Place } from '../_model/place';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private markerService: PlaceService) { }

  countPlaces: Place[] = [];
  countPlacesShopping: Place[] = [];
  countPlacesForEating: Place[] = [];
  CurrentCityTemp: number = 0;
  skyState : string = '';
  todayDate: number;

  ngOnInit() {
    this.todayDate = Date.now();
    this.markerService.findAll().subscribe((places: Place[]) => {
      this.countPlaces = places;
      console.log(this.countPlaces);
      console.log(this.countPlaces.length);
      this.countPlacesShopping = this.countPlaces.filter((item) =>{
        return item.type == "shopping"
      });
      this.countPlacesForEating = this.countPlaces.filter((item) =>{
        return item.type == "Ou manger"
      });
    });

    this.markerService.getWeather().subscribe((res: any[]) => {
      console.log(res.main.temp);
      console.log(res.weather.description);
      this.CurrentCityTemp = res.main.temp - 273.15;
      this.skyState = res.weather[0].description;
    });

  }

}
