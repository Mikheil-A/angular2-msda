import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-msda-menu-button',
    templateUrl: './msda-menu-button.component.html',
    styleUrls: ['./msda-menu-button.component.scss']
})
export class MsdaMenuButtonComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    submit(event) {
        console.log(event);
    }
    onError(event) {
        console.log(event);
    }

}
