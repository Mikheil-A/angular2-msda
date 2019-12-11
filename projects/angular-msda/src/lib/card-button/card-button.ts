import {
    Input,
    Output,
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'msda-card-button',
    exportAs: 'MSDACardButton',
    templateUrl: './card-button.html',
    styleUrls: ['./card-button.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'msda-card-button',
        '(click)': 'hostClick($event)'
    }
})
export class MSDACardButton {

    @Input() title: string;
    @Input() text: string;

    @Input() icon: string = 'icon-4';
    @Input() iconType: string = 'square';
    @Input() iconColor: string = '#FFFFFF';
    @Input() iconBackgroundColor: string = '#EA854D';

    @Input() draggable: boolean = true;

    @Output() buttonClick: EventEmitter<any> = new EventEmitter();

    hostClick(e: Event) {
        this.buttonClick.emit(e);
    }

    moveHandlerClick(e: Event) {
        e.stopPropagation();
    }

}
