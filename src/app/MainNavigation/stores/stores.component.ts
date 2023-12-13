import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as L from 'leaflet';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})

export class StoresComponent implements AfterViewInit, OnInit{
  pharmacies: Pharmacy[]=[];

  customMarkers: L.Marker[] = [];

  private map: any;
  private currentMarker: L.Marker | null = null;

  constructor(private _pharmacy : PharmacyService,
    private snackBar: MatSnackBar
    ){}

    private initMap(): void {
      this.map = L.map('map', {
        center: [13.765114647290359, 121.05528904857633],
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


      const verifiedPharmacies = this.pharmacies.filter(pharmacy => pharmacy.user.accountVerified);

      verifiedPharmacies.forEach(pharmacy => {
        const [lat, lng] = pharmacy.coords.split(',').map(Number);
        const coords: L.LatLngExpression = [lat, lng];

        const customIcon = L.icon({
          iconUrl: './../../../assets/10 open store.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });

        const customMarker = L.marker(coords, { icon: customIcon }).addTo(this.map);

        const popupContent = `
          <strong>${pharmacy.name}</strong><br>
          Address: ${pharmacy.address}<br>
          Store Hours: ${pharmacy.storeHours}<br>
          Contact Number: ${pharmacy.contactNumber}
        `;
        customMarker.bindPopup(popupContent);
      });
    });
  }


  softDeletePharmacy(pharmacy: Pharmacy) {
    this._pharmacy.softDeletePharmacy(pharmacy).subscribe(
      () => {
        const archive = "Product archived successfully.";
        this.showSuccessMessage(archive);

      },
      (error) => {
        const archiveError = "Unexpected error: cannot archive product"
        this.openErrorSnackbar(archiveError)
      }
    );
  }

  openErrorSnackbar(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Dismiss', {
      duration: 5000,
    });
  }

  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      panelClass: ['success-snackbar'],
    });
  }


}
