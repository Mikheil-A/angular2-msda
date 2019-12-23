import { EventEmitter, OnInit } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    type: string;
    color: string;
    disabled: boolean;
    showLoading: Boolean;
    click: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(e: Event): void;
}
