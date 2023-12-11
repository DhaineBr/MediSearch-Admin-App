import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  pharmacies: Pharmacy[] = [];

  constructor(private _pharmacy : PharmacyService){}

  ngOnInit(): void {
    this.getAllPharmacies()
  }

  getAllPharmacies() {
    this._pharmacy.getAllPharmacies().subscribe((response) => {
      this.pharmacies = Array.isArray(response) ? response : [response];
      console.log(this.pharmacies);


    });
  }

}
