import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'msda-chips',
    templateUrl: './chips.component.html',
    styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {
    @Input() type = 'button';
    @Input() bgColor: string;
    @Input() color: string = 'white';
    @Input() disabled = false;
    @Input() public showLoading: Boolean;


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
