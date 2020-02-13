import { Injectable } from '@angular/core';
import { Place } from '../_model/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl :string = "http://localhost:3000/markers";
  private weather :string = "http://api.openweathermap.org/data/2.5/weather?q=beni%20mellal&appid=b3fa6d2303d0eb6b1a20dd3626a5177b";
  private place:Place;

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Place[]>(this.baseUrl);
  }
  deletePlace(id: number){
    return this.http.delete<Place>(this.baseUrl+`/${id}`);
  }
  createPlace(place: Place){
    return this.http.post<Place>(this.baseUrl, place);
  }
  updatePlace(place: Place){
    return this.http.put<Place>(this.baseUrl + `/${place.id}`, place);
  }
  setter(place: Place){
    this.place = place;
  }
  getter(){
    return this.place;
  }
  getWeather(){
    return this.http.get(this.weather);
  }
}
