import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'msda-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
  @Input() chips: string[];

  @Output() onChange: EventEmitter<string[]> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }


  onRemove(index: number): void {
    // remove selected chip
    if (index !== -1) {
      this.chips.splice(index, 1);
      this.onChange.emit(this.chips);
    }
  }
}
