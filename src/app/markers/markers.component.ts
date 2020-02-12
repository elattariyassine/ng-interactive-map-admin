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
  onAddOrUpdate: boolean = false;
  types : string[] = ["que voire","transport","Ou manger","shopping","Ou dormir","visite touristique"];

  // coordinate: number[] = [this.place.coordinates[0],this.place.coordinates[1]];
    
  // onAddOrUpdate: boolean = true;

  constructor(private placeService: PlaceService, private router: Router) { }

  ngOnInit() {
    this.place = this.placeService.getter();

    if (this.place.id == undefined ){
      this.place.coordinates = [];
      // this.place.coordinates[1] = 0;
    }
    else
    {
      this.onAddOrUpdate = !this.onAddOrUpdate;
    }
  }
  processForm(){
    console.log(this.place);
    if(this.place.id == undefined){
      this.placeService.createPlace(this.place).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/markers']);
      });
    }
    else
    {
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
