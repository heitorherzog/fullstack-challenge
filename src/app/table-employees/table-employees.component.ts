import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'app/models/employee';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit {
  @Input() employees: Employee[];
  constructor() { }

  ngOnInit() {
  }

}
