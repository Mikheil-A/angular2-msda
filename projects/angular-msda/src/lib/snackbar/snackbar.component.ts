import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBarRef} from '@angular/material';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';



@Component({
  selector: 'msda-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _matSnackBarRef: MatSnackBarRef<SnackbarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this._matSnackBarRef.containerInstance.snackBarConfig.data);
    console.log(this.data);
  }


  closeSnackbar() {
    this._matSnackBarRef.dismiss();
  }
}
