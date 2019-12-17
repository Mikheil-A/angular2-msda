import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'msda-button-round',
  templateUrl: './button-round.component.html',
  styleUrls: ['./button-round.component.scss']
})
export class ButtonRoundComponent implements OnInit {
  @Input() type = 'button';
  @Input() bgColor: string;
  @Input() disabled = false;

  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(e: Event) {
    e.stopPropagation();
    this.click.emit(e);
  }
}
