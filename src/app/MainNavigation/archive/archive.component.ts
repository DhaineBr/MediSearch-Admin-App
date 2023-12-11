import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/shared/models/pharmacy';
import { PharmacyService } from 'src/app/shared/services/pharmacy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archives: Pharmacy[] = [];
  selectedArchives: Pharmacy[] = [];
  constructor(private _pharmacies : PharmacyService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllArchived();
  }

  getAllArchived() {
    this._pharmacies.getAllArchived().subscribe((response) => {
      this.archives = Array.isArray(response) ? response : [response];
      console.log(this.archives);
    });
  }


  searchQuery: string = '';



  selectAll = false;

  toggleSelectAll(event: Event) {
    this.selectAll = (event.target as HTMLInputElement).checked;

    for (const archive of this.archives) {
      archive.isSelected = this.selectAll;
    }
  }


  toggleItemSelection(archive: Pharmacy) {
      archive.isSelected = !archive.isSelected;

      if (archive.isSelected) {
        this.selectedArchives.push(archive);
      } else {
        const index = this.selectedArchives.indexOf(archive);
        if (index !== -1) {
          this.selectedArchives.splice(index, 1);
        }
      }
    }

  restoreSelectedPharmacy() {
    this.selectedArchives.forEach((archive) => {
      this.restoreDeletedPharmacy(archive);
    });

    this.selectedArchives = [];
  }

  hardDeleteSelectedMedicines() {
    this.selectedArchives.forEach((archive) => {
      this.hardDeletePharmacy(archive);
    });

    this.selectedArchives = [];
  }

  restoreDeletedPharmacy(archive: Pharmacy) {
    this._pharmacies.restoreDeletedPharmacy(archive).subscribe(
      () => {
        const restore = 'Product restored successfully';
        this.showSuccessMessage(restore)
      },
      (error) => {
        const restoreError = 'Unexpected error: Could not restore medicine.';
        this.openErrorSnackbar(restoreError)
      }
    );
  }

  hardDeletePharmacy(archive: Pharmacy) {
    this._pharmacies.hardDeletePharmacy(archive).subscribe(
      () => {
        const deleted = 'Product deleted successfully';
        this.showSuccessMessage(deleted)
      },
      (error) => {
        const deleteError = 'Unexpected error: Could not delete medicine.';
        this.openErrorSnackbar(deleteError)
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
