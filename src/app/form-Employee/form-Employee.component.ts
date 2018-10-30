import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/services/employee.service';
import { Employee } from 'app/models/employee';
import { ResultResponse } from 'app/models/resultResponse';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-Employee',
  templateUrl: './form-Employee.component.html',
  styleUrls: ['./form-Employee.component.css'],
  providers: [EmployeeService]
})
export class FormEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  loaded = false;
  userForm: NgForm;;
  employees: Employee[];
  employee: Employee = new Employee('', '', '');
  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe((response: ResultResponse<Employee[]>) => {
            
            this.loaded = true;
            this.employees = (response.data as Employee[]);

      });
  }

  insertEmployee(employee: Employee) {
    this.employeeService.insertEmployee(employee).subscribe((response: ResultResponse<Employee>) => {

      this.userForm.resetForm();
      this.getAllEmployees();
      
    });
  }

  onSubmit(userForm: NgForm) {

    this.userForm = userForm;

    if (this.employee.name == null || this.employee.name == '') return;
    if (this.employee.surName == null || this.employee.surName == '') return;
    if (this.employee.participation == null || this.employee.participation == '') return;

    this.insertEmployee(this.employee);

  }
}
