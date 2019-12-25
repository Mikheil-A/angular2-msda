import {Component, Inject, OnInit} from '@angular/core';
import {MSDAToastConfig, MSDAToastService} from '../../../../projects/angular-msda/src/lib/toast/toast.service';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-msda-toast',
  templateUrl: './msda-toast.component.html',
  styleUrls: ['./msda-toast.component.scss']
})
export class MsdaToastComponent implements OnInit {

  config: MSDAToastConfig = {
    onClose: () => {
      console.log('Toast Closed');
    },
    linkClick: (e: Event) => {
      console.log(e);
    },
    closeAfter: 5000
  };

  // constructor(private msdaToastService: MSDAToastService,
  //             @Inject(MAT_SNACK_BAR_DATA) public data: any,
  //             private _matSnackBar: MatSnackBar) {
  // }

  constructor(private msdaToastService: MSDAToastService) {
  }

  ngOnInit() {
  }

  onError(event) {
    console.log(event);
  }

  onLoad(event) {
    console.log(event);
  }


  showSnackbar() {
    setTimeout(() => {
      this.msdaToastService.showHtml('<p>გაცნობებთ რომ მოფრინავს მეტეორი, სადარბაზოებში <span class="msda-link">ჩილიმის მოწევა</span> დაშვებულია</p>', this.config);
    }, 2000);


      // this._matSnackBar.open('<p>გაცნობებთ რომ მოფრინავს მეტეორი, სადარბაზოებში <span class="msda-link">ჩილიმის მოწევა</span> დაშვებულია</p>', {
      //   duration: 2000
      // });
  }
}
