import { Component, OnInit, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  statusOptions: SelectItem[] | any;
  selectedStatus = -1;
  constructor() {}

  ngOnInit(): void {
    this.statusOptions = [
      { label: 'Any Status', value: -1 },
      { label: 'Information', value: 0 },
      { label: 'Warning', value: 1 },
      { label: 'Critical', value: 2 },
      { label: 'Offline', value: 3 },
      { label: 'Hardware Status', value: 4 },
    ];
  }
}
