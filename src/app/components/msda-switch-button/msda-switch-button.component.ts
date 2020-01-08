import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-msda-switch-button',
  templateUrl: './msda-switch-button.component.html',
  styleUrls: ['./msda-switch-button.component.scss']
})
export class MsdaSwitchButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  change(e: number) {
    // redirect page from here according to the value
    console.log(e);
  }
}
