import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {TableComponent} from './table/table.component';
import {EditComponentComponent} from './edit-component/edit-component.component';
import {AuthGuard} from './_authGuard/auth.guard';
import {AuthGuardLogin} from './_authGuard/return.login.auth.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'edit', component: EditComponentComponent},
  {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'edit', component: EditComponentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
