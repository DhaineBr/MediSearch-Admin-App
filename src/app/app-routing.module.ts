import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './MainNavigation/home/home.component';
import { StoresComponent } from './MainNavigation/stores/stores.component';
import { UsersComponent } from './MainNavigation/users/users.component';
import { ArchiveComponent } from './MainNavigation/archive/archive.component';
import { ReceptionComponent } from './MainNavigation/reception/reception.component';
import { SettingsComponent } from './MainNavigation/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'archive', component: ArchiveComponent},
  { path: 'stores', component: StoresComponent},
  { path: 'reception', component: ReceptionComponent},
  { path: 'users', component: UsersComponent},
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
