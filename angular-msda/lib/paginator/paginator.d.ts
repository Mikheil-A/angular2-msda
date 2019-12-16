import { EventEmitter, OnChanges } from '@angular/core';
export declare class MSDAPaginator implements OnChanges {
    itemsPerPage: number;
    totalItems: number;
    itemsPerPageConfig: number[];
    page: EventEmitter<any>;
    pageConfigChange: EventEmitter<any>;
    currentPageIndex: number;
    numberOfTotalPages: number;
    private _pageEventData;
    constructor();
    ngOnChanges(): void;
    nextPage(): void;
    previousPage(): void;
    moveToTheRequestedPage(): void;
    onSelectionChange(e: Event): void;
}
