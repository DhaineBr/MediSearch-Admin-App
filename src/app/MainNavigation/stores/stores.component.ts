import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as L from 'leaflet';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})

export class StoresComponent implements AfterViewInit, OnInit{
  pharmacies: Pharmacy[]=[];
  private map: any;
  private currentMarker: L.Marker | null = null;

  constructor(private _pharmacy : PharmacyService){}

  private initMap(): void {
    this.map = L.map('map', {
      center: [13.758749885834986, 121.05909921598801],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 17,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }

  ngOnInit(): void {
    this.getAllPharmacies()
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  getAllPharmacies() {
    this._pharmacy.getAllPharmacies().subscribe((response) => {
      this.pharmacies = Array.isArray(response) ? response : [response];
      console.log(this.pharmacies);
    });
  }
}
