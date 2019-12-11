import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'msda-menu-button',
    exportAs: 'MSDAMenuButton',
    templateUrl: './menu-button.html',
    styleUrls: ['./menu-button.scss']
})

export class MSDAMenuButton {

    @Input('active') active: boolean;
    @Input('text') text: string;
    @Input('notifCounter') notifCounter: number;

    @Output() click: EventEmitter<any> = new EventEmitter();

    onClick(e: Event) {
        event.stopPropagation();
        this.click.next(e);
    }
}
