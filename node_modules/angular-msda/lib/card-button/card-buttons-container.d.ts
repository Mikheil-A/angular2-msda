import { EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
export declare class MSDACardButtonsContainer implements AfterViewInit {
    private _el;
    row: number;
    column: number;
    dragEnabled: boolean;
    dataSource: any;
    sortupdate: EventEmitter<any>;
    buttonClick: EventEmitter<any>;
    constructor(_el: ElementRef);
    readonly gridTemplateColumns: string;
    ngAfterViewInit(): void;
}
