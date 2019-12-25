import {Component, OnInit} from '@angular/core';
import {MsdaSnackBarService} from '../../../../projects/angular-msda/src/lib/snackbar/snackbar.service';



@Component({
  selector: 'app-msda-snackbar',
  templateUrl: './msda-snackbar.component.html',
  styleUrls: ['./msda-snackbar.component.scss']
})
export class MsdaSnackbarComponent implements OnInit {

  constructor(private _msdaSnackBarService: MsdaSnackBarService) {
  }

  ngOnInit() {
  }


  showSnackbar() {
    this._msdaSnackBarService.open('test message', 3000);
  }
}
