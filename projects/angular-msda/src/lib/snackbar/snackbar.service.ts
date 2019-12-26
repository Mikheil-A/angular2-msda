import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from './snackbar.component';


@Injectable()
export class MsdaSnackBarService {

  constructor(private _matSnackBar: MatSnackBar) {
  }


  open(message: string, duration: number) {
    // this._matSnackBar.open(message, 'action', {
    //   duration: 2000,
    // });

    this._matSnackBar.openFromComponent(SnackbarComponent, {
      duration: duration,
      data: 'test data',
      horizontalPosition: 'left'
    });
  }
}
