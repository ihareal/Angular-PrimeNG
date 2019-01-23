import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {TableComponent} from './table/table.component';
import {EditComponentComponent} from './edit-component/edit-component.component';
import {AuthGuard} from './_authGuard/auth.guard';
import {AuthGuardLogin} from './_authGuard/return.login.auth.guard';
import {AddComponent} from './add/add.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'edit/:id', component: EditComponentComponent},
  {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'edit', component: EditComponentComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
