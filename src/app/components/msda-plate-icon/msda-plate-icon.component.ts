import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msda-plate-icon',
  templateUrl: './msda-plate-icon.component.html',
  styleUrls: ['./msda-plate-icon.component.scss']
})
export class MsdaPlateIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    onSortUpdate(e) {
        console.log(e);
    }

    onButtonClick(e) {
        console.log(e);
    }

    onError(event) {
        console.log(event);
    }

    onLoad(event) {
        console.log(event);
    }

}
