import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-msda-form-field',
  templateUrl: './msda-form-field.component.html',
  styleUrls: ['./msda-form-field.component.scss']
})
export class MsdaFormFieldComponent implements OnInit {
  formGroup: FormGroup;


  constructor() {
  }

  ngOnInit() {
    this._initializeForm();
  }


  onInputChange(event) {
    // console.log('2222222222', event);
  }

  private _initializeForm() {
    this.formGroup = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
