import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/customer';
// Import EmployeeService
import { CustomerInfoService } from '../services/customer-info.service';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  loading: boolean;
  emp: Employee = new Employee();
  displayDialog: boolean;
  employees: Employee[];
  employee: Employee;
  constructor(private _employeeService: CustomerInfoService) { }
  ngOnInit() {
    this.getEmployees();
  }
  public getEmployees() {
    this._employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  SelectedEmp(employee: Employee) {
    this.employee = employee;
    this.displayDialog = true;
  }
  onRowSelect(event) {
    this.employee = this.cloneEmp(event.data);
    this.displayDialog = true;
  }
  cloneEmp(E: Employee): Employee {
    let Emp = new Employee();
    for (let prop in E) {
      Emp[prop] = E[prop];
    }
    return Emp;
  }
}
