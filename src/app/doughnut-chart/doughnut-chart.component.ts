import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { Employee } from 'app/models/employee';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @Input() employees: Employee[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const employee: SimpleChange = changes.employees;

    if (employee.currentValue) {
      this.updateChart();
    }
  }
  public doughnutChartType: string = 'doughnut';

  public donutChartColor: any[] = [{
    backgroundColor: ["#9C56B9", "#E94A34", "#16BA9A", "#2C97DE", "#BCC3C7"]
  }];

  public doughnutChartPosition: any = {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15,
        fontStyle: 'bold'
      }
    }
  }
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = []
  private updateChart() {

    this.doughnutChartLabels = this.employees.map(x => x.name);
    this.doughnutChartData = this.employees.map(x => parseInt(x.participation));

    setTimeout(() => {
      if (this.chart && this.chart.chart && this.chart.chart.config) {
        this.chart.chart.config.data.labels = this.doughnutChartLabels;
        this.chart.chart.config.data.data = this.doughnutChartData;
        this.chart.chart.update();
      }
    });
  }
}
