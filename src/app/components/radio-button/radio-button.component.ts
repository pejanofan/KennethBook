import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {

  val1: string | any;
  constructor() { }

  ngOnInit(): void {
    this.val1 = 'Option 2';
  }

  @Input()
  type: string | any;

}
