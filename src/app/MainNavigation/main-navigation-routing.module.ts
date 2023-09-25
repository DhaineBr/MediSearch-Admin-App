import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { StoresComponent } from './stores/stores.component';
import { SettingsComponent } from './settings/settings.component';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  {path: 'home', 
  component: MainNavigationComponent, 
children:  [
  {path: 'dashboard', component: HomeComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'users', component: UsersComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'settings', component: SettingsComponent},
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
