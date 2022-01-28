import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("logout");
    this.router.navigate(['login']);
  }
  home(){
    console.log("home");
  }
  hol(){
    console.log("holiday");
     
  }
  atten(){
    console.log("attendance");
    
  }
  emp(){
    console.log("emp");

  }

}
