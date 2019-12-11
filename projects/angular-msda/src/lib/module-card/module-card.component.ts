import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'msda-module-card',
    templateUrl: './module-card.component.html',
    styleUrls: ['./module-card.component.scss'],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateX(180deg)'
            })),
            state('inactive', style({
                transform: 'rotateX(0)',
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class ModuleCardComponent implements OnInit {
    /**
     * Icon name
     */
    @Input() icon: string;

    /**
     * Icon color
     */
    @Input() color: string;

    /**
     * title
     */
    @Input() title: string;

    /**
     * warning
     */
    @Input() warn: Boolean;

    /**
     * card click event emitter
     */
    @Output() click: EventEmitter<any> = new EventEmitter();

    /**
     * remove icon click event emitter
     */
    @Output() remove: EventEmitter<any> = new EventEmitter();

    flip: string = 'inactive';
    isHovered: boolean;

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

    toggleFlip(e: Event) {
        e.stopPropagation();
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }

    onMouseEnter($event) {
        this.isHovered = true;
        this.flipBack();
    }

    onMouseLeave($event) {
        this.isHovered = false;
        this.flipBack();
    }

    flipBack() {
        setTimeout(() => {
            if (!this.isHovered) {
                this.flip = 'inactive';
            }
        }, 1000);
    }
}
