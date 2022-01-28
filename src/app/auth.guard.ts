import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UseraccountService } from './services/useraccount.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate,CanActivateChild {
  constructor(private auth:UseraccountService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLoggedIn) {
      // logged in so return true
      return true;
  }
  // not logged in so redirect to login page with the return url and return false
  alert("You need to SignIn First !")
  this.router.navigate(['login']);
  return false;
 }
canActivateChild(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return false;
}

}
