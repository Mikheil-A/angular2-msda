import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-msda-select',
  templateUrl: './msda-select.component.html',
  styleUrls: ['./msda-select.component.scss']
})
export class MsdaSelectComponent implements OnInit {
  selectItems: object[] = [
    {value: 'steak-0', viewValue: 'Steak', iconName: 'recycle_bin'},
    {value: 'pizza-1', viewValue: 'Pizza', iconName: 'recycle_bin'},
    {value: 'tacos-2', viewValue: 'Tacos', iconName: 'recycle_bin'}
  ];


  constructor() {
  }

  ngOnInit() {
  }
}
