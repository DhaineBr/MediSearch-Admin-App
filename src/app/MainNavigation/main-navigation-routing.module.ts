import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { ReceptionComponent } from './reception/reception.component';


const routes: Routes = [
  {path: 'mainnav', component: MainNavigationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reception', component: ReceptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
