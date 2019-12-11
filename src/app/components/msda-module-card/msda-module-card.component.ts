import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-msda-module-card',
    templateUrl: './msda-module-card.component.html',
    styleUrls: ['./msda-module-card.component.scss']
})
export class MsdaModuleCardComponent implements OnInit {

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
