import {
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    HostListener
} from '@angular/core';

@Component({
    selector: 'msda-toast',
    templateUrl: './toast.html',
    styleUrls: ['./toast.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs: 'MSDAToas',
})
export class MSDAToast {

    @Input() html: string;
    @Input() dismiss: () => void;

    @Output() linkClick: EventEmitter<Event> = new EventEmitter();

    constructor() { }

    @HostListener('click', ['$event']) click(e: Event) {
        if ((<HTMLElement>e.target).classList.contains('msda-link')) this.linkClick.emit(e);
    }

}
