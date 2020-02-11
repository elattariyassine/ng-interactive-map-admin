import { Injectable } from '@angular/core';
import { Place } from '../_model/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private baseUrl :string = "MOUAD";
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
}
