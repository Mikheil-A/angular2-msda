import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCheckboxChange} from '@angular/material';


@Component({
  selector: 'msda-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Output() change: EventEmitter<MatCheckboxChange> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onChange(e: Event) {
    this.change.emit(e);
  }
}
