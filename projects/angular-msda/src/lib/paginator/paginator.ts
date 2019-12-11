import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
    selector: 'msda-paginator',
    exportAs: 'MSDAPaginator',
    templateUrl: './paginator.html',
    styleUrls: ['./paginator.scss']
})
export class MSDAPaginator implements OnChanges {
    @Input() itemsPerPage: number;
    @Input() totalItems: number;
    @Input() itemsPerPageConfig: number[];

    @Output() page: EventEmitter<any> = new EventEmitter();
    @Output() pageConfigChange: EventEmitter<any> = new EventEmitter();

    currentPageIndex: number = 1;
    numberOfTotalPages: number;

    private _pageEventData: object = {
        pageIndex: this.currentPageIndex,
        pageSize: null
    };


    constructor() {
    }

    ngOnChanges() {
        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this._pageEventData['pageSize'] = this.itemsPerPageConfig[0];
    }


    nextPage() {
        if (this.currentPageIndex < this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = ++this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }

    previousPage() {
        if (this.currentPageIndex > 1) {
            this._pageEventData['pageIndex'] = --this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }

    moveToTheRequestedPage() {
        if (this.currentPageIndex >= 1 && this.currentPageIndex <= this.numberOfTotalPages) {
            this._pageEventData['pageIndex'] = this.currentPageIndex;
            this.page.emit(this._pageEventData);
        }
    }

    onSelectionChange(e: Event) {
        this.itemsPerPage = parseInt(e.srcElement['value'], 10);
        this._pageEventData['pageSize'] = this.itemsPerPage;

        this.numberOfTotalPages = Math.ceil(this.totalItems / this.itemsPerPage);

        this.page.emit(this._pageEventData);
        this.pageConfigChange.emit(this.itemsPerPage);
    }
}
