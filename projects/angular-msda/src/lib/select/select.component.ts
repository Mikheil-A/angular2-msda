import {Component, Input, OnInit} from '@angular/core';


interface IItems {
    value: string;
    viewValue: string;
    iconName: string;
}


@Component({
  selector: 'msda-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() items: IItems[];


  constructor() {
  }

  ngOnInit() {
  }
}
