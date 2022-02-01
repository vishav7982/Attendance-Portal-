import { Component, OnInit } from '@angular/core';
import pkg from '../../assets/data/json/attendanceRecord.json';
import { ColDef } from 'ag-grid-community';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-emp-my-attendance',
  templateUrl: './emp-my-attendance.component.html',
  styleUrls: ['./emp-my-attendance.component.css']
})
export class EmpMyAttendanceComponent implements OnInit {

  //Ag-grid
  columnDefs: ColDef[] = [
    { headerName : 'Day' , field: 'Day' ,cellClass: "grid-cell-centered"},
    {  headerName : 'In-time' ,field: 'In-time',cellClass: "grid-cell-centered"},
    {headerName: 'Out-time' ,  field: 'Out-time',cellClass: "grid-cell-centered"},
    {headerName:"Working-hours" ,field : 'working-hours',cellClass: "grid-cell-centered"}
    
];
  public data = pkg.week1; 
  public AttendanceData: Array<{ [key: string]: string | number | object }> = this.data;
  public rowData = this.AttendanceData;
  public week ="week1";
  ///bar chart declarations
  chartData = [
    {
      data: [9,9,9.25,9,10.5,0,0],
      label: 'In-time(AM)'
    },
    {
      data: [5.5, 6, 6.25,6.5,8.5,0,0],
      label: 'Out-time(PM)'
    }
  ];
  chartLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  chartOptions = {
    responsive: true
  };
  constructor() { }
   week1()
  {
     this.data = pkg.week1;
     this.rowData =this.data;
     this.week ="week1";
     this.chartData = [
      {
        data: [9,9,9.25,9,10.5,0,0],
        label: 'In-time(AM)'
      },
      {
        data: [5.5, 6, 6.25,6.5,8.5,0,0],
        label: 'Out-time(PM)'
      }
    ];
  }
  week2()
  {
    this.data = pkg.week2;
    this.rowData =this.data;
    this.week = "week2";
    this.chartData = [
      {
        data: [10,0,8.25,0,10.5,0,0],
        label: 'In-time(AM)'
      },
      {
        data: [6.5,0,6.25,0,8.5,0,0],
        label: 'Out-time(PM)'
      }
    ];
  }
  week3()
  {
    this.data = pkg.week3;
     this.rowData =this.data;
     this.week = "week3";
     this.chartData = [
      {
        data: [9,9,9.25,9,0,0,0],
        label: 'In-time(AM)'
      },
      {
        data: [7.5,6,7.25,10.5,0,0,0],
        label: 'Out-time(PM)'
      }
    ];
  }
  week4()
  {
    this.data = pkg.week4;
     this.rowData =this.data;
     this.week = "week4";
     this.chartData = [
      {
        data: [9,10,10.25,0,10.5,0,0],
        label: 'In-time(AM)'
      },
      {
        data: [6.5,6,3.25,0,8.5,0,0],
        label: 'Out-time(PM)'
      }
    ];
  }
  ngOnInit(): void {
  }

}
