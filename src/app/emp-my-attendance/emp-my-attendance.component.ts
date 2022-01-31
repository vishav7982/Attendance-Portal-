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
  data = pkg.data; 
  AttendanceData: Array<{ [key: string]: string | number | object }> = this.data;
  rowData = this.AttendanceData;
  
  ///bar chart declarations
  chartData = [
    {
      data: [9,9,9.25,9,10.5,0,0],
      label: 'In-time'
    },
    {
      data: [5.5, 6, 6.25, 6.5,8.5 ,0,0],
      label: 'Out-time'
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
  
  ngOnInit(): void {
  }

}
