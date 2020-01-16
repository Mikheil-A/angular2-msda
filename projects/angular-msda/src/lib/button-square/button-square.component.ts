import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
    selector: 'msda-button-square',
    templateUrl: './button-square.component.html',
    styleUrls: ['./button-square.component.scss']
})
export class ButtonSquareComponent implements OnInit {
    @Input() type = 'button';
    @Input() bgColor: string;
    @Input() color: string = 'white';
    @Input() disabled = false;


    @Output() click: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(e: Event) {
        e.stopPropagation();
        this.click.emit(e);
    }
}
