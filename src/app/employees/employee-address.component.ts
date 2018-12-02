import { Component, OnInit, Input } from '@angular/core';
import { CustomerAddress } from '../models/customer';

@Component({
  selector: 'app-employee-address',
  templateUrl: './employee-address.component.html',
  styleUrls: ['./employee-address.component.css']
})
export class EmployeeAddressComponent implements OnInit {
@Input() Address: CustomerAddress;
  constructor() { }

  ngOnInit() {
  }

}
