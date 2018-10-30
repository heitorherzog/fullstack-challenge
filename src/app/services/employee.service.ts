import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import { Employee } from '../models/employee';
import { ServiceBase } from './serviceBase';

@Injectable()
export class EmployeeService extends ServiceBase {

  constructor(private http: Http) { super(); }
  private route = this.apiUrl + 'employee';
  
    getAllEmployees() {
      return this.http.get(this.route)
      .map((res: Response) => res.json())
      .catch(super.handleError); 
    }

  insertEmployee(employee: Employee) {
    return this.http.post(this.route,employee)
      .map((res: Response) => res.json())
      .catch (super.handleError); 
  }
}
