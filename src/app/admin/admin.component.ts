import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import pkg from '../../assets/data/json/attendanceRecord.json';
import { ColDef } from 'ag-grid-community';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit 
{
  columnDefs: ColDef[] = [
    { headerName : 'Employee ID ' , field: 'TechnicianId' , sortable:true },
    {  headerName : 'Employee Name ' ,field: 'TechnicianName' ,sortable : true},
    {  headerName : ' Years of Experience ' ,field: 'Experience' },
    
];
  data = pkg.data; 
  AttendanceData: Array<{ [key: string]: string | number | object }> = this.data;
  rowData = this.AttendanceData;


  ///bar chart declarations
  chartData = [
    {
      data: [56, 80, 95, 98, 85],
      label: 'Employees Present'
    },
    {
      data: [44, 20, 5, 2,15 ],
      label: 'Employees Absent'
    }
  ];
  chartLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday'
  ];
  chartOptions = {
    responsive: true
  };


  constructor(private commonservice: CommonService) { }
  ngOnInit(): void {
  }
}
