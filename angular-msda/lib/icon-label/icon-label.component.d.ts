import { EventEmitter, OnInit } from '@angular/core';
export declare class IconLabelComponent implements OnInit {
    /**
     * Icon name
     */
    icon: string;
    /**
     * Color
     */
    color: string;
    /**
     * text
     */
    text: string;
    /**
     * click event emitter
     */
    click: EventEmitter<any>;
    /**
     * remove icon click event emitter
     */
    remove: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(e: Event): void;
    onRemove(e: Event): void;
}
