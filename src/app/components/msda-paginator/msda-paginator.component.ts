import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-msda-paginator',
    templateUrl: './msda-paginator.component.html',
    styleUrls: ['./msda-paginator.component.scss']
})
export class MsdaPaginatorComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }


    onPage(e: Event) {
        console.log(e);
    }

    onPageConfigChange(e: Event) {
        console.log(e);
    }
}
