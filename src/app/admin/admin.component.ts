import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import pkg from '../../assets/data/json/StudentList.json';
import { ColDef } from 'ag-grid-community';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit 
{

  //Ag-grid
  columnDefs: ColDef[] = [
    { headerName : 'Employee ID ' , field: 'ID' , sortable:true },
    {  headerName : 'Employee Name ' ,field: 'Name'},
    {  headerName : ' Leave Taken ' ,field: 'Leaves' ,sortable:true},
    {headerName: ' Present Today' ,  field: 'IsPresent'}
    
];
  data = pkg.Employees; 
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
