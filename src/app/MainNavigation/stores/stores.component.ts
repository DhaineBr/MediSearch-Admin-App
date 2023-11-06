import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { AddPharmacyComponent } from './add-pharmacy/add-pharmacy.component';
import { EditStoreComponent } from './edit-store/edit-store.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import * as L from 'leaflet';

interface Pharmacy  {
  pharmacyName: string;
  pharmacyAddress: string;
  pharmacyContactNo: string;
  coordinates: number
}

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})

export class StoresComponent implements AfterViewInit {
  private map: any;
  // Add a property to store the current marker
  private currentMarker: L.Marker | null = null;

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

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.addMarker(e.latlng);
      this.addPharmacy(e.latlng)
    });
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  addMarker(latlng: L.LatLngExpression): void {
    const customIcon = L.icon({
      iconUrl: './../../../assets/10 open store.png',
      iconSize: [45, 45],
      iconAnchor: [16, 16]
    });

    // Remove the current marker if it exists
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    this.currentMarker = L.marker(latlng, { icon: customIcon }).addTo(this.map);
  }


  //Opens up a dialog once the marker was added into the map
  constructor(public dialog: MatDialog) {}

  addPharmacy(latlng: L.LatLngExpression): void {
    const dialogRef = this.dialog.open(AddPharmacyComponent, {
      width: '65vh',
      height: '56vh',
      data: { latlng }  // Pass the latlng directly
    });
  }

  closeDialog() {
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }
    // Close the dialog
  }

  openEdit(){
    const dialogRef = this.dialog.open(EditStoreComponent, {
      width: '65vh',
      height: '56vh',
      data: { }  // Pass the latlng directly
    });
  }

  // var map = L.map('map').locate({setView: true, maxZoom: 15});    -- Realtime location
  // for the map marker
  //var default_pin = L.marker(['.$row['lat_'].', '.$row['long_'].'], '.$icon.');
  // default_pin.addTo(map);
  // var popup1 = default_pin.bindPopup('.$row['q'].' '.$row['id'].', '.$row['lastname'].' '.$row['firstname'].' '.$row['mid'].', '.$row['contact'].' '.$row['q'].');
  // popup1.addTo(map);

}
