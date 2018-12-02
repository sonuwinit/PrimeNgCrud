import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/customer';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() Employee = Employee;
  Emp: Employee;
  @Input() display: boolean;
  displayAddress: boolean;
  displayContact: boolean;
  constructor() { }

  ngOnInit() {
    this.display = true;
  }
  AddAddress() {
    this.Employee.Address.push({Add1 : '', Add2 : ''});
  }
  AddContact() {
    this.Employee.Contact.push({Phone1 : '', Phone2 : ''});
  }
  ShowAddress() {
    this.displayAddress = true;
  }
  ShowContact() {
    this.displayContact = true;
  }
}
