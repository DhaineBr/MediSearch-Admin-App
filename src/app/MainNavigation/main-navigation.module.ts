import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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

@NgModule({
  declarations: [
    MainNavigationComponent,
    HomeComponent,
    SettingsComponent,
    StoresComponent,
    UsersComponent,
    ArchiveComponent,
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatTooltipModule
  ]
})
export class MainNavigationModule { }
