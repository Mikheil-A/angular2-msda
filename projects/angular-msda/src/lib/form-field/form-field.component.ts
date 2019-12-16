import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'msda-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() value: string;
  @Input() hint: string;

  // @Input() type = 'button';
  // @Input() color: string;
  // @Input() disabled = false;

  @Input() prefixIcon: string;
  @Input() suffixIcon: string;

  @Output() input: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onInput(e: Event) {
    this.input.emit(e);
    e.stopPropagation();
  }
}
