import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  data: any;
  piechart: any;

  options: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0',
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656',
        },
      ],
    };
    this.piechart = {
      labels: ['Normal', 'Warning', 'Critical', 'Offline'],
      datasets: [
        {
          data: [5, 1, 1, 0],
          backgroundColor: ['#1c9c48', '#fdc503', '#d51f35', '#666666'],
          borderColor: ['#1c9c48', '#fdc503', '#d51f35', '#666666'],
        },
      ],
    };
    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
        fullWidth: true,
        labels: {
          fontColor: '#fff',
          fontSize: 13,
          usePointStyle: true,
        },
      },
    };
  }

  @Input()
  type: string | any;
}
