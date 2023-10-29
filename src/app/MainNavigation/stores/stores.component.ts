import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from './../map.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements AfterViewInit {

  constructor(private router: Router, private mapService: MapService) {}


  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in component...');
    const map = this.mapService.getMapInstance();
    console.log('Map instance:', map);
  }

  navigateToComponent(componentRoute: string): void {
    this.router.navigate(['/home/map']);
  }


  openComponentInSameTab() {
    const componentRoute = '/home/map'; // Replace with your component's route
    this.navigateToComponent(componentRoute);
  }

}
