import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ArchiveComponent } from './archive/archive.component';
import { StoresComponent } from './stores/stores.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RestorePharmacyComponent } from './archive/restore-pharmacy/restore-pharmacy.component';
import { DeletePermanentlyComponent } from './archive/delete-permanently/delete-permanently.component';
import { ConfirmationComponent } from './settings/confirmation/confirmation.component';


@NgModule({
  declarations: [
    MainNavigationComponent,
    HomeComponent,
    SettingsComponent,
    StoresComponent,
    UsersComponent,
    ArchiveComponent,
    RestorePharmacyComponent,
    DeletePermanentlyComponent,
    ConfirmationComponent,
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule,
    LeafletModule,
    MatSnackBarModule
  ],

})
export class MainNavigationModule { }
