import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


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
  @Input() hint: string;
  @Input() label: string;

  @Output() change: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onSelectionChange(e: Event) {
    this.change.emit(e);
  }
}
