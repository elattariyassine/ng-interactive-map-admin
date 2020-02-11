import { Component, OnInit } from '@angular/core';
import { Place } from '../_model/place';
import { PlaceService } from '../_services/marker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.scss']
})
export class MarkersComponent implements OnInit {

  private place: Place;
  onDelete: boolean = true;
  types : string[] = ["all","que voire","transport","ouManger","shopping","ouDormir","visiteTouristique"];

  // coordinate: number[] = [this.place.coordinates[0],this.place.coordinates[1]];
    
  // onAddOrUpdate: boolean = true;

  constructor(private placeService: PlaceService, private router: Router) { }

  ngOnInit() {
    this.place = this.placeService.getter();

    if (this.place.id == undefined ){
      this.place.coordinates = [];
      // this.place.coordinates[1] = 0;
    }
    // if(this.user.id == undefined)
    // {
    //   this.onAddOrUpdate = true; 
    // }else{
    //   this.onAddOrUpdate = false;
    // }
  }
  processForm(a){
    // this.place.coordinates = this.coordinate;
    if(this.place.id == undefined){
      // this.onAddOrUpdate = true;
      this.placeService.createPlace(this.place).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/markers']);
      });
    }
    else
    {
      // this.onAddOrUpdate = false;
      this.placeService.updatePlace(this.place).subscribe(res=>{
        this.router.navigate(['/markers']);
        console.log(res);
      });
    }
  }

  backToList()
  {
    this.router.navigateByUrl('markers');
  }
}
