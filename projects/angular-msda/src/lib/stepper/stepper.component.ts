import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'msda-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() steps: string[];

  @Output() stepChange: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  onStepChange(e: Event) {
    this.stepChange.emit(e);
  }
}
