import {
    Input,
    Output,
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    EventEmitter,
    ElementRef,
    AfterViewInit
} from '@angular/core';

declare const jQuery: any;

@Component({
    selector: 'msda-card-buttons-container',
    exportAs: 'MSDACardButtonsContainer',
    templateUrl: './card-buttons-container.html',
    styleUrls: ['./card-buttons-container.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'role': 'button',
        'class': 'msda-card-buttons-container'
    }
})
export class MSDACardButtonsContainer implements AfterViewInit {

    @Input() row: number = 3;
    @Input() column: number = 3;

    @Input() dragEnabled: boolean = false;

    @Input() dataSource: any = [];

    @Output() sortupdate: EventEmitter<any> = new EventEmitter();
    @Output() buttonClick: EventEmitter<any> = new EventEmitter();

    constructor(private _el: ElementRef) { }

    get gridTemplateColumns() {
        return '1fr '.repeat(this.column).trim();
    }

    ngAfterViewInit(): void {
        if (this.dragEnabled) {
            jQuery('.msda-card-buttons-container-inner', this._el.nativeElement).sortable({
                handle: '.msda-card-button-move-handler'
            }).bind('sortupdate', (event, ui) => {
                this.sortupdate.emit({ event, ui });
            });
        }
    }

}
