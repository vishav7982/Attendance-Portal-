import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmpComponent } from './emp/emp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonService } from './services/common.service';
import { HttpClientModule } from '@angular/common/http';
import {AgGridModule } from 'ag-grid-angular'
import { ChartsModule } from 'ng2-charts';
import { AdminheaderComponent } from './adminheader/adminheader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmpComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ChartsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
