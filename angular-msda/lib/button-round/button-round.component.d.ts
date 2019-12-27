import { EventEmitter, OnInit } from '@angular/core';
export declare class ButtonRoundComponent implements OnInit {
    type: string;
    bgColor: string;
    disabled: boolean;
    click: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(e: Event): void;
}
