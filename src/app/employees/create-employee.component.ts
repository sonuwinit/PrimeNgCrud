import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/customer';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employees: Employee;
  display: boolean;
  constructor() { }

  ngOnInit() {
    this.display = true;
  }

}
