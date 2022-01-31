import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth.guard';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';
import { AdminDeptAttendanceComponent } from './admin-dept-attendance/admin-dept-attendance.component'; 
import { AdminEmpAttendanceComponent } from './admin-emp-attendance/admin-emp-attendance.component';
import { AdminHolidayListComponent } from './admin-holiday-list/admin-holiday-list.component';

import { EmpMyAttendanceComponent } from './emp-my-attendance/emp-my-attendance.component';
import { EmpSubmitAttendanceComponent } from './emp-submit-attendance/emp-submit-attendance.component';
import { EmpApplyLeaveComponent } from './emp-apply-leave/emp-apply-leave.component';
import { EmpHolidayListComponent } from './emp-holiday-list/emp-holiday-list.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'admindashboard',component:AdminComponent,
    canActivate :[AuthGuardGuard]
  },
   
    { path: 'adminDeptAtt', component: AdminDeptAttendanceComponent,canActivate:[AuthGuardGuard] },
    { path: 'adminEmpAtt', component: AdminEmpAttendanceComponent,canActivate:[AuthGuardGuard] },
    { path: 'adminHoliday', component: AdminHolidayListComponent,canActivate:[AuthGuardGuard] },

  {
    path:'empdashboard',component:EmpComponent,
    canActivate :[AuthGuardGuard]
  },
    { path: 'empatten', component: EmpMyAttendanceComponent,canActivate:[AuthGuardGuard] },
    { path: 'empsubmitatten', component: EmpSubmitAttendanceComponent,canActivate:[AuthGuardGuard] },
    { path: 'empapplyleave', component: EmpApplyLeaveComponent,canActivate:[AuthGuardGuard] },
    { path: 'empholidaylist', component: EmpHolidayListComponent,canActivate:[AuthGuardGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
