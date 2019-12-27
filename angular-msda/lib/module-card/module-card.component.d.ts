import { EventEmitter, OnInit } from '@angular/core';
export declare class ModuleCardComponent implements OnInit {
    /**
     * Icon name
     */
    icon: string;
    /**
     * Icon color
     */
    color: string;
    /**
     * title
     */
    title: string;
    /**
     * warning
     */
    warn: Boolean;
    /**
     * card click event emitter
     */
    click: EventEmitter<any>;
    /**
     * remove icon click event emitter
     */
    remove: EventEmitter<any>;
    flip: string;
    isHovered: boolean;
    constructor();
    ngOnInit(): void;
    onClick(e: Event): void;
    onRemove(e: Event): void;
    toggleFlip(e: Event): void;
    onMouseEnter($event: any): void;
    onMouseLeave($event: any): void;
    flipBack(): void;
}
