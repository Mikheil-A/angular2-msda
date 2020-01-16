import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-msda-button',
  templateUrl: './msda-button.component.html',
  styleUrls: ['./msda-button.component.scss']
})
export class MsdaButtonComponent implements OnInit {
  isLoading = false;

  constructor() {
  }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  submit(event) {
    console.log('clicked', event);
  }

  onError(event) {
    console.log(event);
  }
}
