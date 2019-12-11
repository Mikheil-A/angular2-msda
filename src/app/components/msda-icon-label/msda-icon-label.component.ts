import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-msda-icon-label',
    templateUrl: './msda-icon-label.component.html',
    styleUrls: ['./msda-icon-label.component.scss']
})
export class MsdaIconLabelComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onClick(event) {
        console.log('click', event);
    }

    onRemove(event) {
        console.log('remove', event);
    }

    onError(event) {
        console.log(event);
    }
}
