import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.scss']
})
export class AddPharmacyComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { latlng: L.LatLngExpression }) { }


  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  // ... (other component code)

  close() {
    this.closePopup.emit();
    // Close the dialog
  }

}
