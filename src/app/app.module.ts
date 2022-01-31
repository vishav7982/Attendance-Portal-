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
import { AuthGuardGuard } from './auth.guard';
import { AdminDeptAttendanceComponent } from './admin-dept-attendance/admin-dept-attendance.component';
import { AdminEmpAttendanceComponent } from './admin-emp-attendance/admin-emp-attendance.component';
import { AdminHolidayListComponent } from './admin-holiday-list/admin-holiday-list.component';
import { EmpheaderComponent } from './empheader/empheader.component';
import { EmpMyAttendanceComponent } from './emp-my-attendance/emp-my-attendance.component';
import { EmpSubmitAttendanceComponent } from './emp-submit-attendance/emp-submit-attendance.component';
import { EmpApplyLeaveComponent } from './emp-apply-leave/emp-apply-leave.component';
import { EmpHolidayListComponent } from './emp-holiday-list/emp-holiday-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmpComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
    AdminDeptAttendanceComponent,
    AdminEmpAttendanceComponent,
    AdminHolidayListComponent,
    EmpheaderComponent,
    EmpMyAttendanceComponent,
    EmpSubmitAttendanceComponent,
    EmpApplyLeaveComponent,
    EmpHolidayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ChartsModule
  ],
  providers: [CommonService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
