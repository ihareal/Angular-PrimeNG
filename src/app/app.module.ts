import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ChipsModule} from 'primeng/chips';
import { LoginComponent } from './login/login.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { EditComponentComponent } from './edit-component/edit-component.component';
import {PasswordModule} from 'primeng/password';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import {DialogModule, Dialog} from 'primeng/dialog';
// fake-backend
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {fakeBackendProvider} from './fake-backend/fake-backend';
import { JwtInterceptor } from './fake-backend/jwt.interceptor';
import {ErrorInterceptor} from './fake-backend/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    LoginComponent,
    EditComponentComponent,
    InputComponent,
    TableComponent,
    HomeComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    ChipsModule,
    SplitButtonModule,
    PasswordModule,
    DialogModule,
    FormsModule,
    OverlayPanelModule,
    ScrollPanelModule,
    TabViewModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
