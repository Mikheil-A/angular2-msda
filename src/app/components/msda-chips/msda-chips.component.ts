import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-msda-chips',
  templateUrl: './msda-chips.component.html',
  styleUrls: ['./msda-chips.component.scss']
})
export class MsdaChipsComponent implements OnInit {
  chipNames: string[] = ['ragac.zip', 'something.txt', 'new file.cpp'];


  constructor() {
  }

  ngOnInit() {
  }


  change(e: string[]) {
    console.log(e);
  }
}
