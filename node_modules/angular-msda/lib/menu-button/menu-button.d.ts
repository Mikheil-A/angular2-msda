import { EventEmitter } from '@angular/core';
export declare class MSDAMenuButton {
    active: boolean;
    text: string;
    notifCounter: number;
    click: EventEmitter<any>;
    onClick(e: Event): void;
}
