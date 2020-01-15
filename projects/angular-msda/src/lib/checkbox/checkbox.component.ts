import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'msda-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Output() change: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onChange(e: Event) {
    this.change.emit(e);
  }
}
