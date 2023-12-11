import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as L from 'leaflet';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit{
  ngOnInit(): void {
      this.initializeMap();
  }

  private map: L.Map | undefined;

  private initializeMap(): void {
    this.map = L.map('map1').setView([13.758447669619404, 121.05859497704944], 20);

    if (this.map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);}}

  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
