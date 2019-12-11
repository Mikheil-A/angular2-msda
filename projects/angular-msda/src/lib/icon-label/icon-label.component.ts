import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'msda-icon-label',
    templateUrl: './icon-label.component.html',
    styleUrls: ['./icon-label.component.scss']
})
export class IconLabelComponent implements OnInit {
    /**
     * Icon name
     */
    @Input() icon: string;

    /**
     * Color
     */
    @Input() color: string;

    /**
     * text
     */
    @Input() text: string;

    /**
     * click event emitter
     */
    @Output() click: EventEmitter<any> = new EventEmitter();

    /**
     * remove icon click event emitter
     */
    @Output() remove: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(e: Event) {
        e.stopPropagation();
        this.click.emit(e);
    }

    onRemove(e: Event) {
        e.stopPropagation();
        this.remove.emit(e);
    }
}
