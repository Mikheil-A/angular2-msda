import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'msda-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() type = 'button';
    @Input() color: string;
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
