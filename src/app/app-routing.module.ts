import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardGuard } from './auth.guard';
import { EmpComponent } from './emp/emp.component';
import { LoginComponent } from './login/login.component';

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
  {
    path:'empdashboard',component:EmpComponent,
    canActivate :[AuthGuardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
