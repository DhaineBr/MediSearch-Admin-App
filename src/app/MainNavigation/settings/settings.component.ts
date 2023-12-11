import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  pending: Pharmacy [] = [];

  ngOnInit(): void {
    this.getAllPharmacies()
  }
  constructor(public dialog: MatDialog, private _pharmacies: PharmacyService) { }
  openConfirm(){
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '150vh',
      height: 'auto',
      data: {}
    });
  }

  getAllPharmacies()  {
    this._pharmacies.getAllPharmacies().subscribe((response) => {
      this.pending = Array.isArray(response) ? response : [response];
      console.log(this.pending);
    });
  }

}
