import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-msda-stepper',
  templateUrl: './msda-stepper.component.html',
  styleUrls: ['./msda-stepper.component.scss']
})
export class MsdaStepperComponent implements OnInit {
  steps: string[] = ['ზოგადი ინფორმაცია', 'განაცხადის ობიექტის(ების) მდებარეობა', 'მოსაკრებელი', 'დამატებითი ინფორმაცია', 'გადახედვა, გაგზავნა'];


  constructor() {
  }

  ngOnInit() {
  }

}
