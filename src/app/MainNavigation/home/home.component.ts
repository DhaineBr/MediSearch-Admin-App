import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { Order } from 'src/app/shared/models/order';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';
import { OrderService } from 'src/app/shared/services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  pharmacies: Pharmacy[] = [];
  orders: Order[] = [];

  constructor(private _pharmacy : PharmacyService,
    private _order : OrderService){}

  ngOnInit(): void {
    this.getAllPharmacies()
  }

  getAllPharmacies() {
    this._pharmacy.getAllPharmacies().subscribe((response) => {
      this.pharmacies = Array.isArray(response) ? response : [response];
      console.log(this.pharmacies);
    });
  }

  getAllOrders() {
    this._order.getAllOrders().subscribe((response) => {
      this.orders = Array.isArray(response) ? response : [response];
      console.log(this.orders);
    });
  }

  isFulfilled(isFulfilled: boolean){
    return isFulfilled == true;
  }

  getTransactionCount(): number {
    return this.orders.filter((order) =>
    this.isFulfilled(order.isFulfilled)
  ).length;
  }

  i = 1;
  count(loopCount: number) {
    for (let j = 0; j < loopCount; j++) {
      this.i++;
    }
  }

  isVerified(accountVerified: boolean){
    return accountVerified == true;
  }

  getRegisteredPharmacies(): number {
    return this.pharmacies.filter((pharmacy) =>
    this.isVerified(pharmacy.user.accountVerified)
  ).length;
  }

  isNotVerified(accountVerified: boolean){
    return accountVerified == false;
  }

  getUnregisteredPharmacies(): number {
    return this.pharmacies.filter((pharmacy) =>
    this.isNotVerified(pharmacy.user.accountVerified)
  ).length;
  }

}
