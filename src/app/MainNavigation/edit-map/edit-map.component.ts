import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Router } from '@angular/router';
import { MapService } from './../map.service'; // Replace 'path-to-map.service' with the actual path

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.scss']
})
export class EditMapComponent implements AfterViewInit {



  constructor(private router: Router, private mapService: MapService) {}



  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in component...');

    const map = this.mapService.getMapInstance();
    console.log('Map instance:', map);
  }


  navigateToComponent(componentRoute: string): void {
    this.router.navigate(['/home/stores']);
  }


  openComponentInSameTab() {
    const componentRoute = '/home/stores'; // Replace with your component's route
    this.navigateToComponent(componentRoute);
  }
}
