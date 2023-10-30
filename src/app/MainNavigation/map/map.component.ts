import { Component, AfterViewInit } from '@angular/core';
import { MapService } from './../map.service';

@Component({
  selector: 'app-map',
  template: '<div id="map" style="height: 500px;"></div>',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.mapService.initMap();
  }
}
