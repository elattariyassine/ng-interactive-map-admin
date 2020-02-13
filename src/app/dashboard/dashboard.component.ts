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
  todayDate: number = 0;
  todayDateName: string = '';

  ngOnInit() {
    this.todayDate = Date.now();
    this.getStatictics();
    this.getCurrentDate();
    this.markerService.getWeather().subscribe((res) => {
      this.CurrentCityTemp = res['main']['temp'] - 273.15;
      this.skyState = res['weather'][0]["description"];
    });
  }


  getStatictics(){
    this.markerService.findAll().subscribe((places: Place[]) => {
      this.countPlaces = places;
      this.countPlacesShopping = this.countPlaces.filter((item) =>{
        return item.type == "shopping"
      });
      this.countPlacesForEating = this.countPlaces.filter((item) =>{
        return item.type == "Ou manger"
      });
    });
  }
  getCurrentDate(){
    let nowDate = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "Dimanche";
    weekdays[1] = "Lundi";
    weekdays[2] = "Mardi";
    weekdays[3] = "Mercredi";
    weekdays[4] = "Jeudi";
    weekdays[5] = "Vendredi";
    weekdays[6] = "samedi";
    this.todayDateName = weekdays[nowDate.getDay()];
  }

}
