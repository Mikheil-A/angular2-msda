import { EventEmitter } from '@angular/core';
export declare class MSDACardButton {
    title: string;
    text: string;
    icon: string;
    iconType: string;
    iconColor: string;
    iconBackgroundColor: string;
    draggable: boolean;
    buttonClick: EventEmitter<any>;
    hostClick(e: Event): void;
    moveHandlerClick(e: Event): void;
}
