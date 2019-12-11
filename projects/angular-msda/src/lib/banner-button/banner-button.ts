import {
    Input,
    Output,
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'msda-banner-button',
    exportAs: 'MSDABannerButton',
    templateUrl: './banner-button.html',
    styleUrls: ['./banner-button.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: { 'class': 'msda-banner-button msda-body-2' }
})
export class MSDABannerButton {

    /**
     * Icon name
     */
    @Input() icon: string;

    /**
     * Image URL
     */
    @Input() image: string;

    /**
     * Banner title
     */
    @Input() title: string;

    /**
     * Image text
     */
    @Input() text: string;

    /**
     * Date string
     */
    @Input() date: string;

    /**
     * Icon and "read more" text color
     */
    @Input() color: string;

    /**
     * Read more text
     */
    @Input() readMoreText: string = 'ვრცლად ...';

    /**
     * Button click event emitter
     */
    @Output() buttonClick: EventEmitter<any> = new EventEmitter();

}
