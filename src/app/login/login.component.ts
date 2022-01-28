import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { useraccount, UseraccountService } from '../services/useraccount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId = ''
  password = ''
  invalidLogin = false
  user: useraccount;
  type:Number
  constructor(private userService: UseraccountService,private router: Router,
    private loginservice: AuthenticationService) { }
    
  ngOnInit() {
  }
  public checkLogin() {
    this.type = 1;
     if(this.type==1){
       console.log("SECOND"+this.employeeId);
          if(this.employeeId=="admin"){
              this.router.navigate(['admindashboard'])
              this.userService.setLoggedIn(true);
              return true;
          }
          else if(this.employeeId=="emp"){
              console.log("Employee");
              this.router.navigate(['empdashboard'])
              this.userService.setLoggedIn(true);
              return true;
          }else{
            console.log("Invalid");
              this.employeeId=""
              this.password=""
             alert("ENTER THE CORRECT USERNAME AND PASSWORD :(");
     }
    }

  }


}
