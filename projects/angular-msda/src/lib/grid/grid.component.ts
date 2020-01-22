import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'msda-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    @Input() displayedColumnsEng: string[];
    @Input() displayedColumnsGeo: string[];

    @Input() dataSource: any;


    @Output() click: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(e: Event) {
        e.stopPropagation();
        this.click.emit(e);
    }
}
