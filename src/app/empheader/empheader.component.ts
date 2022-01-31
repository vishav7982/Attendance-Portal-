import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empheader',
  templateUrl: './empheader.component.html',
  styleUrls: ['./empheader.component.css']
})
export class EmpheaderComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    this.router.navigate(['login']);
  }
  home(){
    console.log("home");
    this.router.navigate(['empdashboard']);
  }
  myatten(){
    console.log("My attendance");
    this.router.navigate(['empatten']);
    
  }
  subatten(){
    console.log("Submit Attendance");
    this.router.navigate(['empsubmitatten']);
  }
  applyleave(){
     this.router.navigate(['empapplyleave']);
     
  }
  hollist(){
        this.router.navigate(['empholidaylist']);
  }
}
