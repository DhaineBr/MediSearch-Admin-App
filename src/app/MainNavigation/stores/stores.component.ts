import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [13.75925772742415, 121.05904817755936];

  constructor() {}

  ngOnInit(): void {
    // Do initialization that doesn't depend on DOM elements here
  }

  ngAfterViewInit(): void {
    this.initMap(); // Initialize the map after the DOM is ready
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
