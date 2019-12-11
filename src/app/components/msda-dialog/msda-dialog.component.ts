import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

export interface DialogData {
    animal: string;
    name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'app-msda-dialog',
    templateUrl: './msda-dialog.component.html',
    styleUrls: ['./msda-dialog.component.scss']
})
export class MsdaDialogComponent {

    animal: string;
    name: string;
    isLoading = false;

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '600px',
            panelClass: 'dialog-container',
            hasBackdrop: true,
            data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

    onError(event) {
        console.log(event);
    }

    onLoad(event) {
        console.log(event);
    }
}
