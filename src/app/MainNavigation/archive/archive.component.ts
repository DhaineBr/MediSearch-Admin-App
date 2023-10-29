import { Component, OnInit } from '@angular/core';

interface Archive {
  userID: number;
  pharmacyName: string;
  address: string;
  contactNo: string;
  dateArchived: string;
  selected: boolean;
}
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archives: Archive[] = [];
  filteredArchive: Archive[] = [];

  ngOnInit(): void {
    this.archives = this.generateDummyData(10);
    this.filteredArchive = this.archives;
  }

  generateDummyData(count: number): Archive[] {
    const dummyArchive: Archive[] = [];

    for (let i = 1; i <= count; i++) {
      const archive: Archive = {
        userID: 7121099996 + i,
        pharmacyName: `Medicine ` + (7121099997 + i),
        address: `Address` + (10 + i),
        contactNo: `0` + (9195879901 + i),
        dateArchived: `01/01/2024`,
        selected: false
      };

      dummyArchive.push(archive);
    }

    return dummyArchive;
  }


  searchQuery: string = '';

  filterArchive () {
    this.filteredArchive = this.archives.filter((archive) =>
    archive.pharmacyName.toLowerCase().includes(this.searchQuery.toLowerCase()))
  }

  selectAll = false; // Initialize the header checkbox state

  toggleSelectAll(event: Event) {
    this.selectAll = (event.target as HTMLInputElement).checked;

    // Loop through the archive items and update their checkbox state
    for (const archive of this.filteredArchive) {
      archive.selected = this.selectAll;
    }
  }

  // Function to handle individual row checkbox click event
  toggleItemSelection(archive: Archive) {
    archive.selected = !archive.selected;
    this.updateSelectAllState();
  }

  // Helper function to update the state of the "Select All" checkbox
  updateSelectAllState() {
    this.selectAll = this.filteredArchive.every((archive) => archive.selected);
  }
  permanentlyDelete() {
    const selectedArchives = this.filteredArchive.filter((archive) => archive.selected);

    for (const archive of selectedArchives) {
      const index = this.filteredArchive.indexOf(archive);
      if (index !== -1) {
        this.filteredArchive.splice(index, 1);
      }
    }
  }
}
