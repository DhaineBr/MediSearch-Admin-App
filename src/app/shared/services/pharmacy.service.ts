import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Pharmacy } from '../models/pharmacy';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  pharmUrl = '/pharmacies'
  constructor(private http: HttpClient) { }

  public getAllPharmacies() {
    return this.http.get(`${environment.apiProdURL}${this.pharmUrl}`);
  }

  public getAllArchived() {
    return this.http.get(`${environment.apiProdURL}${this.pharmUrl}/archived`);
  }

  public softDeletePharmacy(data: Pharmacy) {
    return this.http.delete(`${environment.apiProdURL}${this.pharmUrl}/${data.id}`);
  }

  public hardDeletePharmacy(data: Pharmacy) {
    return this.http.delete(`${environment.apiProdURL}${this.pharmUrl}/force-delete/${data.id}`);
  }

  public restoreDeletedPharmacy(data: Pharmacy) {
    return this.http.post(`${environment.apiProdURL}${this.pharmUrl}/archived/${data.id}/restore`, data);
  }
}


