import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-msda-checkbox',
  templateUrl: './msda-checkbox.component.html',
  styleUrls: ['./msda-checkbox.component.scss']
})
export class MsdaCheckboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  onChange(e) {
    console.log(e);
  }
}
