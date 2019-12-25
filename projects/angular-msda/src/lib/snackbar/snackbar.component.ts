import {Component, OnInit} from '@angular/core';
import {MatSnackBarRef} from '@angular/material';



@Component({
  selector: 'msda-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _matSnackBarRef: MatSnackBarRef<SnackbarComponent>) {
  }

  ngOnInit() {
  }


  closeSnackbar() {
    this._matSnackBarRef.dismiss();
  }
}
