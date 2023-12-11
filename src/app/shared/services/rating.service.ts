import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  public getAllPharmacies() {
    return this.http.get(`${environment.apiProdURL}/pharmacies`);
  }

  public getAllRatings() {
    return this.http.get(`${environment.apiProdURL}/pharmacies/ratings`);
  }
}
