import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    this.router.navigate(['login']);
  }
  home(){
    console.log("home");
    this.router.navigate(['admindashboard']);
  }
    atten(){
    console.log("attendance");
    this.router.navigate(['adminDeptAtt']);
    
  }
  emp(){
    console.log("emp");
    this.router.navigate(['adminEmpAtt']);

  }
  hol(){
    console.log("holiday");
    this.router.navigate(['adminHoliday']);
     
  }

}
