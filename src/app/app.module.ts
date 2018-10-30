import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormEmployeeComponent } from './form-Employee/form-Employee.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { TableEmployeesComponent } from './table-employees/table-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEmployeeComponent,
    DoughnutChartComponent,
    TableEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
