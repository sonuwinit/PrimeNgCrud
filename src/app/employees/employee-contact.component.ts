import { Component, OnInit, Input } from '@angular/core';
import { CustomerPhone } from '../models/customer';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {
  @Input() Contact: CustomerPhone;
  constructor() { }

  ngOnInit() {
  }

}
