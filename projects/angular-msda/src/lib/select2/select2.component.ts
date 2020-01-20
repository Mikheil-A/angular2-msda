import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


interface IItems {
  value: string;
  viewValue: string;
  iconName: string;
}


@Component({
  selector: 'msda-select2',
  templateUrl: './select2.component.html',
  styleUrls: ['./select2.component.scss']
})
export class Select2Component implements OnInit {
  @Input() items: IItems[];
  @Input() placeholder: string;
  @Input() disabled: boolean = false;

  @Output() change: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onSelectionChange(e: Event) {
    this.change.emit(e);
  }
}
