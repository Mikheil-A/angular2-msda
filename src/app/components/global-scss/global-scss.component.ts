import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-global-scss',
    templateUrl: './global-scss.component.html',
    styleUrls: ['./global-scss.component.scss']
})
export class GlobalScssComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onError(event) {
        console.log(event);
    }

    onLoad(event) {
        console.log(event);
    }

}
