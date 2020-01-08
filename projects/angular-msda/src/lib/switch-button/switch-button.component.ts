import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'msda-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnInit {
  activeButtonId = new BehaviorSubject<number>(0);

  @Output() onChange: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    this.activeButtonId.subscribe((e) => {
      this.onChange.emit(e);
    });
  }


  onSwitch(activeId: number) {
    this.activeButtonId.next(activeId);
  }
}
