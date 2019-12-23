import { EventEmitter } from '@angular/core';
export declare class MSDABannerButton {
    /**
     * Icon name
     */
    icon: string;
    /**
     * Image URL
     */
    image: string;
    /**
     * Banner title
     */
    title: string;
    /**
     * Image text
     */
    text: string;
    /**
     * Date string
     */
    date: string;
    /**
     * Icon and "read more" text color
     */
    color: string;
    /**
     * Read more text
     */
    readMoreText: string;
    /**
     * Button click event emitter
     */
    buttonClick: EventEmitter<any>;
}
