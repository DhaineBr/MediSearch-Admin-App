import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './MainNavigation/home/home.component';
import { StoresComponent } from './MainNavigation/stores/stores.component';
import { UsersComponent } from './MainNavigation/users/users.component';
import { ArchiveComponent } from './MainNavigation/archive/archive.component';
import { ReceptionComponent } from './MainNavigation/reception/reception.component';
import { SettingsComponent } from './MainNavigation/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StoresComponent,
    UsersComponent,
    ArchiveComponent,
    ReceptionComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
