import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-msda-form-field',
  templateUrl: './msda-form-field.component.html',
  styleUrls: ['./msda-form-field.component.scss']
})
export class MsdaFormFieldComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  onInputChange(event) {
    console.log('2222222222', event);
  }
}
