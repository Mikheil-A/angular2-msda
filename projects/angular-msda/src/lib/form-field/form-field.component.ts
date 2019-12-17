import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';



@Component({
  selector: 'msda-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, OnChanges {
  @Input() placeholder: string;
  @Input() value: string;
  @Input() isRequired: boolean = false;
  @Input() hint: string;
  @Input() fcName: string = null;
  @Input() fGroup: FormGroup = null;

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

  ngOnChanges(): void {
  }


  onInput(e: Event) {
    this.input.emit(e);
    e.stopPropagation();
  }
}
