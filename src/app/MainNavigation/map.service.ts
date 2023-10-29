import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: L.Map;

  constructor() {
    this.map = null as any; // Initialize map in the constructor
  }

  initMap(): void {
    // Initialize the map
    this.map = L.map('map').setView([13.75925772742415, 121.05904817755936], 15);

    // Add a tile layer (replace with your preferred tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 40,
      minZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  getMapInstance(): L.Map {
    return this.map;
  }
}
