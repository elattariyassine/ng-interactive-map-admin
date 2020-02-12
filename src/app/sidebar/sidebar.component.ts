import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }
  toMarkerAdd(){
    this.route.navigateByUrl('/op');
  }

}
