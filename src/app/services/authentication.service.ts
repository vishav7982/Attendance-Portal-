import { Injectable } from '@angular/core';
import {UseraccountService, useraccount} from './useraccount.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public employes:useraccount;
  public employe:useraccount;
  constructor(private useraccountservice: UseraccountService,private router: Router) { }

  authenticate() {
    console.log("from authentication service"+this.employe.employeeId);
    this.useraccountservice.getEmployee(this.employe.employeeId)
    .subscribe(data => this.employes = data);
    this.router.navigate(['login']);
    return false;
  }

}